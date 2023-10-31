// composables/useIntersectionObserver.ts
import { Ref } from "vue";

const doObserve = (elements: Ref<HTMLElement | null>[]) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  // 各componentで配列にまとめてdoObserve()に渡したrefに対して、
  // forEachで回して一つ一つにIntersectionObserverの監視対象にする
  elements.forEach((element, index) => {
    const observer = new IntersectionObserver((items) => {
      // 一つのrefに対してclass付与処理をしていく
      items.forEach((item) => {
        if (item.isIntersecting && item.target.classList.contains("-delay")) {
          const delay = 300 * index;
          setTimeout(() => {
            item.target.classList.add("-intersecting");
          }, delay);
        } else if (item.isIntersecting) {
          item.target.classList.add("-intersecting");
        } else {
          item.target.classList.remove("-intersecting");
        }

        if (item.isIntersecting && item.target.classList.contains("-once")) {
          observer.unobserve(element.value);
        }
      });
    }, options);
    observer.observe(element.value!);
  });
};

export const useIntersectionObserver = () => {
  return {
    doObserve,
  };
};
