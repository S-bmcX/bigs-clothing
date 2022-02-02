import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
// import { render } from 'node-sass';

const Directory = ({sections}) => (
            // THE BELOW IS A MORE EFFICIENT WAY TO DYNAMICALLY PULL IN INFO FROM ABOVE ARRAY FOR USE ELSEWHERE ;;
            // NOTE: this only works because the info being passed (ie title, imageUrl, size, linkUrl) share the same syntax with the variables being used in the commented example below
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
            // THE BELOW IS A VERBOSE WAY OF WRITING THE ABOVE, THE ABOVE IS MORE EFFICIENT
            // <div className="directory-menu">
            //     {this.state.sections.map(({title, imageUrl, id, linkURl, size}) => (
            //         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            //     ))}
            // </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);