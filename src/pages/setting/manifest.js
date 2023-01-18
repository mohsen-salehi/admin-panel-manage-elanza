import React, {useRef, useState} from 'react';

function Manifest() {
    const [text , setText] = useState(`
     {
\t"name": "ELANZA",
\t"short_name": "ELANZA",
\t"start_url": ".",
\t"display": "standalone",
\t"background_color": "#ffffff",
\t"theme_color": "#ffffff",
\t"icons": [{
\t\t\t"src": "/assets/global/favicon/android-icon-36x36.png",
\t\t\t"sizes": "36x36",
\t\t\t"type": "image/png",
\t\t\t"density": "0.75"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/android-icon-48x48.png",
\t\t\t"sizes": "48x48",
\t\t\t"type": "image/png",
\t\t\t"density": "1.0"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/android-icon-72x72.png",
\t\t\t"sizes": "72x72",
\t\t\t"type": "image/png",
\t\t\t"density": "1.5"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/android-icon-96x96.png",
\t\t\t"sizes": "96x96",
\t\t\t"type": "image/png",
\t\t\t"density": "2.0"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/android-icon-144x144.png",
\t\t\t"sizes": "144x144",
\t\t\t"type": "image/png",
\t\t\t"density": "3.0"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/android-icon-192x192.png",
\t\t\t"sizes": "192x192",
\t\t\t"type": "image/png",
\t\t\t"density": "4.0"
\t\t},
\t\t{
\t\t\t"src": "/assets/global/favicon/512x512.png",
\t\t\t"sizes": "512x512",
\t\t\t"type": "image/png",
\t\t\t"density": "4.0"
\t\t}
\t]
}   
    `)
    const manifests = useRef()
    return (
        <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
            <section className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                    <h5 className="col-12 p-2">manifest.json</h5>
                </div>
            </section>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap rounded p-2 shadow-sm mt-2">
                <h6 className="col-12 bg-default p-3 rounded d-flex align-items-end text-white ">
                   manifest.json
                </h6>
                <section className="col-12 d-flex justify-content-center justify-content-xl-between align-items-start flex-wrap p-3 rounded">
                    <textarea ref={manifests} dir="ltr" name="" id="" className="col-12" rows="30">
                        {text}
                    </textarea>
                </section>
                <div className="col-12 p-2 rounded bg-secondary bg-opacity-10">
                    <button className="btn btn-success text-white mx-1" onClick={()=> setText(manifests?.current?.value)}>ذخیره</button>
                </div>
            </section>
        </section>
    );
}

export default Manifest;