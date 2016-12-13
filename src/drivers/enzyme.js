import { mount } from 'enzyme';

const init = (options) => {
  return new Driver(options);
};

class Driver {
  constructor(options) {
    this.options = options;
  }

  startSession() {
    return new Promise(resolve => {
      this.wrapper = mount(this.options.app);
      resolve();
    });
  }

  endSession() {
    this.wrapper.unmount();
  }

  findByTestID(id) {
    return new Element(this.wrapper.find({testID: id}));
  }
}

class Element {
  constructor(element) {
    this.element = element;
  }

  text() {
    return new Promise(resolve => {
      resolve(this.element.text());
    })
  }
}

export default {
  init,
};
