import { useEffect } from "react";

export function useKeyPress(key, callback) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }
      document.addEventListener("keydown", callBack);

      return () => document.removeEventListener("keydown", callBack);
    },
    [callback, key]
  );
}
