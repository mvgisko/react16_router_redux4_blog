/*
* @Author: Gisko Maksim
* @Date:   2018-04-20 12:21:39
* @Last Modified by:   Gisko Maksim
* @Last Modified time: 2018-04-27 17:43:12
*/
import React from 'react';
import Spin from 'spin';

const spinner = new Spin().spin();

const Spinner = () => (<div>{ spinner.el }</div>);

export default Spinner;
