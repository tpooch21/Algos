/*
 * Make an eventListener class with .trigger(), .off(), and .on() methods.
 *
 * Example:
 *
 * const eventListener = new EventListener();
 *
 * eventListener.on('click', function() {
 *   console.log('clicked');
 * });
 *
 * eventListener.trigger('click');
 * --> Calling this logs: 'clicked'
 *
 * Requirements:
 * - It should be able to handle multiple callback functions for the same event name.
 * - If eventListener.trigger is called with additional arguments it should pass those to the listeners.
 * - We should be able to remove a given event listener.
 *
 * ----------------------------------------------------
 * Example 1:
 *
 * const eventListener = new EventListener();
 *
 * eventListener.on('click', function() {
 *   console.log('clicked');
 * });
 *
 * eventListener.trigger('click');
 *
 * --> logs: 'clicked'
 *
 * ----------------------------------------------------
 * Example 2:
 *
 * const eventListener = new EventListener();
 *
 * eventListener.on('click', function() {
 *   console.log('clicked');
 * });
 *
 * eventListener.on('click', function() {
 *   console.log('clicked again');
 * });
 *
 * eventListener.off('click', )
 *
 * eventListener.trigger('click');
 *
 * --> logs: 'clicked'
 *           'clicked again'
 *
 * ----------------------------------------------------
 * Example 3:
 *
 * const eventListener = new EventListener();
 *
 * function logClicked() {
 *   console.log('clicked');
 * }
 *
 * eventListener.on('click', logClicked);
 *
 * eventListener.trigger('click');
 *
 * --> logs: 'clicked'
 *
 * eventListener.off('click', logClicked);
 *
 * eventListener.trigger('click');
 *
 * --> does nothing.
 *
 * ----------------------------------------------------
 * Example 4:
 *
 * const eventListener = new EventListener();
 *
 * eventListener.on('abc', function(target) {
 *   console.log('clicked: ' + target);
 * });
 *
 * eventListener.trigger('abc', 'button');
 *
 * --> logs: 'clicked: button'
 *
 *
 * EventListener class
 * .on() method, .off() method, .trigger() method
 *
 * .on()
 * takes an event name, and callback as arguments
 * store the event name and its callback in an object
 * .on(eventName, callback) {
 *  object[eventName] = [callback];
 * }
 *
 * {'click': [callback1, callback2]}
 *
 * .trigger('click', arg1, arg2)
 * Invoke all of the callbacks specified in calls to .on() that match the event name
 *  If it's passed an additional argument, it should pass that as the arg to the callbacks in .on()
 * [callback1, callback2]
 * Iterate over the callbacks returned, invoke each callback
 * arguments = ['click', arg1, arg2]
 * .trigger(eventName, ...args) {
 *    const callbacks = events[eventName];
 *    Iterate over callbacks, callback(args)
 * }
 *
 * .off(eventName, function)
 *  Lookup the eventhandler callbacks
 * if function is undefined, return
 * iterate over the callbacks and compare to input function
 * if one matches, splice it out of the callback array
 * if after splicing the callback arry is lenth 0, delete the property
 *

 * /
 * */

class EventListener {
  constructor() {
    this.eventHandlers = {};
  }

  on = (eventName, callback) => {
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].push(callback);
    } else {
      this.eventHandlers[eventName] = [callback];
    }
  }

  trigger = (eventName, ...args) => {
    const callbacks = this.eventHandlers[eventName];

    if (!callbacks) {
      console.log('Event removed');
      return;
    }

    callbacks.forEach(cb => {
      cb.apply(this, args);
    });
  }

  off = (eventName, callback) => {
    if (!callback) {
      return;
    }

    const callbacks = this.eventHandlers[eventName];
    callbacks.forEach((cb, i) => {
      if (cb === callback) {
        callbacks.splice(i, 1);
      }
    });

    if (callbacks.length === 0) {
      delete this.eventHandlers[eventName];
    }
  }

}

//  const eventListener = new EventListener();

//   eventListener.on('click', function() {
//     console.log('clicked');
//   });

//   eventListener.trigger('click');

//  --> logs: 'clicked'
 // const eventListener = new EventListener();

 // function logClicked() {
 //   console.log('clicked');
 // }

 // eventListener.on('click', logClicked);

 // eventListener.trigger('click');

 // // --> logs: 'clicked'

 // eventListener.off('click', logClicked);

 // eventListener.trigger('click');

//  --> logs: 'clicked: button'

 const eventListener = new EventListener();

 eventListener.on('click', function() {
   console.log('clicked');
 });

 eventListener.on('click', function() {
   console.log('clicked again');
 });

 eventListener.off('click', )

 eventListener.trigger('click');