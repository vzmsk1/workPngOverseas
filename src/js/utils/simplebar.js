import "simplebar/dist/simplebar.css";
import SimpleBar from "simplebar";

if (document.querySelectorAll("[data-simplebar]").length) {
  Array.prototype.forEach.call(
    document.querySelectorAll("[data-simplebar]"),
    (el) => new SimpleBar(el),
  );
}
