/**
 * Similar to {@link isElementInViewport} but different because this function can
 * be used to check if a current element scrolled into view from the top or bottom
 * 
 * @param element 
 * @returns True or false depending of the outcome
 */
const isElementScrolledIntoView = (element: HTMLElement, partialVisibility: boolean = false): boolean => {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  if(partialVisibility) {
    // Partially visible elements return true:
    return elemTop < window.innerHeight && elemBottom >= 0;
  }

  // Only completely visible elements return true:
  return (elemTop >= 0) && (elemBottom <= window.innerHeight);
};

export default isElementScrolledIntoView;
