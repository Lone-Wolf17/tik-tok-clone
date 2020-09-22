import React, { useState } from 'react';
import FavoriteIcon from "@material-ui/icons/Favourite"
import MessageIcon from "@material-ui/icons/Message"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import ShareIcon from "@material-ui/icons/Share"
import "./IconBar.css"

export default function VideoSidebar () {

    const [liked, setLiked] = useState(false);
    const [shared, setShared] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                
                {liked? 
                    (<FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/>) : (<FavoriteIcon fontSize="large" onClick={e => setLiked(true)} /> )
                }
                
            <p>{liked ? 300 +1 : 300}</p>

            </div>

            <div className="videoSidebar__button">

            <MessageIcon fontSize="large"/>
            <p>300</p>
            </div>

            <div className="videoSidebar_button">
                
                
            {shared? 
                    (<ShareIcon fontSize="large" onClick={e => setShared(false)}/>) : (<ShareIcon fontSize="large" onClick={e => setShared(true)} /> )
            }

            
            <p>{shared ? 300+1 : 300}</p>
        
            </div>
        </div>
    )
}

