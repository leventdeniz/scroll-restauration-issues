/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

function lockBody() {
  const { body } = document;
  const scrollY = window.scrollY;

  // Store the current scroll position
  body.dataset.scrollLockTop = String(scrollY);

  // Get the current computed style of the body
  const bodyStyle = window.getComputedStyle(body);

  // Get the current `top` value of the body
  const top = bodyStyle.getPropertyValue("top");

  // Check if the `top` value is auto
  if (top && top === "auto") {
    body.style.top = "0px";
  }

  // Get the current `position` value of the body
  const position = bodyStyle.getPropertyValue("position");

  // Check if the `position` value is static
  if (position && position === "static") {
    body.style.position = "relative";
  }

  // Get the width of the scrollbar
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  // Apply the styles to the body
  body.style.setProperty("overflow", "hidden", "important");
  body.style.setProperty("overscroll-behavior", "contain", "important");
  body.style.setProperty("position", "fixed", "important");
  body.style.setProperty("width", "100%", "important");
  body.style.setProperty("top", `-${scrollY}px`, "important");

  // Check if the scrollbar has width
  if (scrollbarWidth) {
    body.style.setProperty("padding-right", `${scrollbarWidth}px`, "important");
  }
}

function unlockBody() {
  const { body } = document;

  // Get the stored scroll position
  const scrollY = body.dataset.scrollLockTop;

  // Remove the styles from the body
  body.style.removeProperty("overflow");
  body.style.removeProperty("overscroll-behavior");
  body.style.removeProperty("position");
  body.style.removeProperty("width");
  body.style.removeProperty("top");
  body.style.removeProperty("padding-right");

  // Restore the scroll position
  window.scrollTo(0, Number(scrollY));
}

if (typeof document.startViewTransition === "function") {
  window.addEventListener("popstate", (e) => {
    if (e.hasUAVisualTransition) {
      return;
    }
    lockBody();
    //console.log(e);
    //scrollY = window.scrollY;
    //const { body } = document;
    //body.style.setProperty("overflow", "hidden");
    //body.style.setProperty("overscroll-behavior", "contain");
    //body.style.setProperty("position", "absolute");
    //body.style.setProperty("height", "100svh");
    //body.style.setProperty("width", "100svw");
    //body.style.setProperty("top", `-${scrollY}px`);
    //history.scrollRestoration = "manual";
    window.addEventListener(
      "startviewtransition",
      () => {
        unlockBody();
        //history.scrollRestoration = "auto";
        //body.style.removeProperty("overflow");
        //body.style.removeProperty("overscroll-behavior");
        //body.style.removeProperty("position");
        //body.style.removeProperty("height");
        //body.style.removeProperty("width");
        //body.style.removeProperty("top");
      },
      { once: true }
    );
    //setTimeout(() => {
    //  history.scrollRestoration = "auto";
    //});

    //window.addEventListener(
    //  "scroll",
    //  () => {
    //    console.log(1, window.scrollY);
    //    window.scrollTo(0, scrollY);
    //    console.log(2, window.scrollY);
    //  },
    //  { once: true }
    //)
  });

  const startViewTransition = (cb: () => Promise<void> | void) => {
    const transition = Document.prototype.startViewTransition.call(
      document,
      () => {
        window.dispatchEvent(new CustomEvent("startviewtransition"));
        return cb?.();
      }
    );

    //transition.ready.then(() => {
    //  console.log([window.scrollY, document.documentElement.scrollTop]);
    //  //window.scrollTo(0, window.scrollY || document.documentElement.scrollTop);
    //});

    return transition;
  };
  Object.assign(document, { startViewTransition });
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
