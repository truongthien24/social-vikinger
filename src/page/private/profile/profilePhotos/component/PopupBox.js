import React from 'react'
import UploadItem from './UploadItem'

const PopupBox = () => {

    const fakeAPIForm = [
        {
            name: 'album_photo_description_01',
            value: 'img/cover/23.jpg',
            isPhotoCover: true
        },
        {
            name: 'album_photo_description_02',
            value: 'img/cover/32.jpg',
            isPhotoCover: false,
        },
        {
            name: 'album_photo_description_03',
            value: 'img/cover/36.jpg',
            isPhotoCover: false,
        },
        {
            name: 'album_photo_description_04',
            value: 'img/cover/38.jpg',
            isPhotoCover: false,
        },
        {
            name: 'album_photo_description_05',
            value: 'img/cover/37.jpg',
            isPhotoCover: false,
        },
    ]

    const renderPhoto = () => {
        return fakeAPIForm?.map((item, index)=> {
            return <UploadItem
                data={item}
                key={index}
            />
        })
    }

    return (
        <div className="popup-box popup-album-creation">

            <div className="popup-close-button popup-album-creation-trigger">
            
            <svg className="popup-close-button-icon icon-cross">
                <use xlinkHref="#svg-cross"></use>
            </svg>
            
            </div>
        
            <p className="popup-box-title">Create Album +</p>
        
            <form className="form">
            
                <div className="form-row">
                    
                    <div className="form-item">
                    
                    <div className="form-input small">
                        <label for="album-name">Album Name</label>
                        <input type="text" id="album-name" name="album_name"/>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="form-uploadables" data-simplebar>
                    
                    <div className="upload-item-list">
                    
                        <div className="upload-item">
                            <svg className="icon-plus">
                                <use xlinkHref="#svg-plus"></use>
                            </svg>
                        </div>
                        
                        {
                            renderPhoto()
                        }
                    
                    </div>
                    
                </div>

                <div className="popup-box-actions">
                    
                    <p className="popup-box-action button white popup-album-creation-trigger">Discard All</p>
                    
                    <button className="popup-box-action button secondary">Post Album!</button>
                    
                </div>
            
            </form>
        
        </div>
    )
}

export default PopupBox