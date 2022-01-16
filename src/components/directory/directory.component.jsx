import React from 'react';

import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
// import { render } from 'node-sass';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                }]
            }
        }  
    
    render() {
        return (
            // THE BELOW IS A MORE EFFICIENT WAY TO DYNAMICALLY PULL IN INFO FROM ABOVE ARRAY FOR USE ELSEWHERE ;;
            // NOTE: this only works because the info being passed (ie title, imageUrl, size, linkUrl) share the same syntax with the variables being used in the commented example below
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
            // THE BELOW IS A VERBOSE WAY OF WRITING THE ABOVE, THE ABOVE IS MORE EFFICIENT
            // <div className="directory-menu">
            //     {this.state.sections.map(({title, imageUrl, id, linkURl, size}) => (
            //         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            //     ))}
            // </div>
        )
    }
}

export default Directory;