/* HomeLife — small progressive-enhancement script. The site works without it. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
      var hdr = document.querySelector(".site-header");
      if (hdr) hdr.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", function (mq) {
      if (mq.matches) setOpen(false);
    });
  }

  /* Header shadow once the page scrolls */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* Subtle reveal on scroll (skipped under reduced motion) */
  var reveals = document.querySelectorAll(".reveal, .reveal-img");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Contact form: inline validation, then submit to the endpoint in data-endpoint.
     Until an endpoint is configured (see README), it tells the visitor honestly. */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var showError = function (input, msg) {
      var err = document.getElementById(input.id + "-error");
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) err.textContent = msg || "";
    };
    var validate = function (input) {
      var v = input.value.trim();
      if (input.required && !v) return "Please fill in this field.";
      if (input.tagName === "SELECT") return "";
      if (input.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Please enter a valid email address.";
      if (input.type === "tel" && v && !/^[+0-9\s()-]{7,}$/.test(v)) return "Please enter a valid phone number.";
      return "";
    };
    form.querySelectorAll(".input").forEach(function (input) {
      input.addEventListener("blur", function () { showError(input, validate(input)); });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") showError(input, validate(input));
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      form.querySelectorAll(".input").forEach(function (input) {
        var msg = validate(input);
        showError(input, msg);
        if (msg && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      /* Send the enquiry as a ready-to-send WhatsApp message */
      var waNumber = form.getAttribute("data-whatsapp");
      if (waNumber) {
        var val = function (name) { var el = form.elements[name]; return el ? el.value.trim() : ""; };
        var lines = ["Hi HomeLife, I'd like to enquire.", "", "Name: " + val("name")];
        if (val("phone")) lines.push("Phone: " + val("phone"));
        if (val("area")) lines.push("Area: " + val("area"));
        lines.push("Interested in: " + val("topic"));
        lines.push("", val("message"));
        var url = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(lines.join("\n"));
        window.open(url, "_blank", "noopener");
        status.className = "form-status form-status--ok";
        status.textContent = "WhatsApp is opening with your message. Just press send. If it didn't open, ";
        var a = document.createElement("a");
        a.href = url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "tap here to continue on WhatsApp";
        status.appendChild(a);
        status.appendChild(document.createTextNode("."));
        return;
      }

      var endpoint = form.getAttribute("data-endpoint");
      if (!endpoint) {
        status.className = "form-status form-status--info";
        status.textContent = "Thanks! This form isn't connected yet, so your message was not sent. Please reach us using the contact details on this page.";
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.setAttribute("aria-busy", "true");
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          status.className = "form-status form-status--ok";
          status.textContent = "Thank you — your message has been sent. We'll get back to you soon.";
        })
        .catch(function () {
          status.className = "form-status form-status--info";
          status.textContent = "Sorry, something went wrong sending your message. Please try again or contact us directly.";
        })
        .finally(function () {
          btn.disabled = false;
          btn.removeAttribute("aria-busy");
        });
    });
  }
})();
