/**
 * Create a single ahref on the fly in order to download something or 
 * execute an automatic click event on that newly created anchor tag
 * 
 * @param href 
 * @param name 
 */
const createDownloadLink = (href: string, name: string, autoremove: boolean = true): void => {
  const link: HTMLAnchorElement = document.createElement("a");
  link.href = href;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  if(autoremove){
    document.body.removeChild(link);
  }
};

export default createDownloadLink;
