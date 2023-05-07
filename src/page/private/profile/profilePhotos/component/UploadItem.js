import React from 'react'

const UploadItem = (props) => {

    // Props
    const {data} = props;

    // Return
    return (
        <div className="upload-item">
                                
            <figure className="upload-item-image liquid">
                <img src={data?.value} alt="upload-item-23"/>
            </figure>
            
            <div className="form-input small">
                <label for="album-photo-description-01">Description</label>
                <textarea id={data?.name} name={data?.name}></textarea>
            </div>
            
            <div className="checkbox-wrap small">
                <input type="radio" id="album-set-photo-cover-01" name="album_set_photo_cover" value="cover-01" checked={data?.isPhotoCover}/>
            
                <div className="checkbox-box">
                    
                    <svg className="icon-cross">
                        <use xlinkHref="#svg-cross"></use>
                    </svg>
                    
                </div>
                
                <label for="album-set-photo-cover-01">Set as album cover</label>
            </div>
            
        </div>
    )
}

export default UploadItem