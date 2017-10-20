import React from 'react';

class Model {
	constructor(){
		this.notify = null;
	}
	subscribe (render) {
		this.notify = render;
	}

}

export default Model;