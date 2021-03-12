export function checkUrl(url) {

    const regexr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexr.test(url)) {
        return true;
    } else {
        return false;
    }
}