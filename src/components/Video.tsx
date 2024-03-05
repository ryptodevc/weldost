function Video(props:any) {
    return (
        <div
            className="preview-container"
            dangerouslySetInnerHTML={{
                __html: `<iframe src=${props?.link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Embedded youtube" />`,
                // __html: `<video src="https://www.youtube.com/embed/kMhQ1ajmvi0?si=b24zT3ac34ubY5Qq" autoPlay controls muted="true" playsInline preload="none" loop type="video/mp4" class="preview" />`,
            }}
        ></div>
    );
}

export default Video;
