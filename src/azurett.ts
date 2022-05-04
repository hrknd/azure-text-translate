import https from "./https-common";

class azurett {
    translate(original_text:string, target_lang:string) {
    const params = [{
        'text':original_text
    }]

    return https.post('translate?api-version=3.0&from=ja&to=' + target_lang, params)
    }
}

export default new azurett();

