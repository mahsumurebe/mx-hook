/**
 * MXHook - Hook Plugin for JavaScript
 *
 * The purpose of the plugin is to collect, manage and group
 * the hooks used in a single class. The plugin is free to use.
 * Distribution and development is only open if it is to be
 * distributed free of charge.
 *
 * For donation: http://www.fb.com/mahsumurebe :)
 *
 * @author Mahsum UREBE | https://github.com/mahsumurebe/
 * @since 2017
 */
'use strict';
/**
 * Argument error catcher.
 * @param {string} message
 * @constructor
 */
function HookInvalidAddArgs(message) {
    this.message = message + ' For details: http://www.github.com/mahsumurebe/mx-hook/#errors';
    this.name = 'HookInvalidAddArgument';
}

/**
 * The error trapping function called because the correct function was not
 * @param {string} message
 * @constructor
 */
function HookIsNotFunction(message) {
    this.message = message + ' For details: http://www.github.com/mahsumurebe/mx-hook/#errors';
    this.name = 'HookIsNotFunction';
}

/**
 * Kanca sistemi.
 *
 * @type {{add, get, remove}}
 */
var MXHook = function () {
    /**
     * Hooks
     *
     * @type {Array}
     */
    var hooks = [];

    /**
     * Get more realistic types
     * @param {*} arg
     * @returns {*}
     */
    var get_type = function (arg) {
        var _pr = Object.prototype.toString.call(arg).replace(/\[(.*) (.*)\]/g, '$2');
        if (!!_pr) {
            return _pr.toLowerCase();
        }
        return undefined;
    };

    /**
     * Check is function
     * @param {*} arg Argument
     * @returns {boolean}
     */
    var is_function = function (arg) {
        return get_type(arg) === 'function';
    };

    /**
     * Check is object
     * @param {*} arg argument
     * @returns {boolean}
     */
    var is_object = function (arg) {
        return get_type(arg) === "object";
    };

    /**
     * Check is object
     * @param {*} arg argument
     * @returns {boolean}
     */
    var is_array = function (arg) {
        return get_type(arg) === "array";
    };

    /**
     * Check is undefined
     * @param {*} arg argument
     * @returns {boolean}
     */
    var is_undefined = function (arg) {
        return get_type(arg) === "undefined";
    };

    // If {}.merge not defined, define object merge
    if (is_undefined(Object.prototype.merge)) {
        /**
         * Define object merge.
         *
         * @returns {{}}
         */
        Object.prototype.merge = function () {
            'use strict';
            var dst = {};
            var args = [].splice.call(arguments, 0);
            var item;
            while (args.length > 0) {
                item = args.splice(0, 1)[0];
                if (is_object(item)) {
                    for (var q in item) {
                        if (item.hasOwnProperty(q)) {
                            if (is_object(item[q]))
                                dst[q] = {}.merge(dst[q] || {}, item[q]);
                            else
                                dst[q] = item[q];
                        }
                    }
                }
            }
            return dst;
        }
    }

    // HOOK FUNCTIONS

    /**
     * Add hook.
     *
     * @param {object} opts Options.
     *
     * @returns {object}
     */
    var add = function (opts) {
        if (!is_object(opts))
            throw new HookInvalidAddArgs('Invalid argument was sent for adding hook.');

        var options = {}.merge({
            func: null,
            args: [],
            name: '_global',
            initialize: function (hook) {

            }
        }, opts);

        if (!is_function(options.func)) {
            throw new HookIsNotFunction('Hook function not defined correctly.');
        }
        /**
         * Hook object.
         */
        var hook = {
            _bindings: {
                initialize: [options.initialize],
                beforerun: [],
                run: [],
                callback: []
            },
            count: 0,
            func: options.func,
            args: options.args,
            name: options.name,

            /**
             * Call event.
             *
             * @param {string} event_name   Event Name
             * @param {function} func       Function
             * @returns {hook}
             */
            on: function (event_name, func) {
                if (!this.hasOwnProperty(event_name)) {
                    this._bindings[event_name] = [];
                }
                this._bindings[event_name].push(func);

                return this;
            },

            /**
             * Unbind event.
             *
             * @param {string} event_name Event Name
             *
             * @returns {hook}
             */
            unbind: function (event_name) {
                this._bindings[event_name] = [];

                return this;
            },

            /**
             * Trigger event.
             *
             * @param {string} event_name Event Name
             * @param {Array} [args=Array] args Send arguments.
             *
             * @returns {hook}
             */
            trigger: function (event_name, args) {
                if (this._bindings.hasOwnProperty(event_name)) {
                    for (var i in this._bindings[event_name]) {
                        if (this._bindings[event_name].hasOwnProperty(i)) {
                            var event = this._bindings[event_name][i];
                            if (is_function(event))
                                event.apply(this, is_array(args) ? args : []);
                        }
                    }
                }

                return this;
            },

            /**
             * Returns the number of call of the hook.
             * @returns {number}
             */
            getCount: function () {
                return this.count;
            },

            /**
             * Run hook item.
             *
             * @param {Array} args
             * @returns {*} The return value of the function defined in the hook is returned.
             */
            run: function (args) {
                var _args = is_array(this.args) ? this.args : []; // predefined arguments
                // combine predefined arguments with new arguments.
                if (is_array(args))
                    for (var i in args) {
                        if (args.hasOwnProperty(i))
                            _args.push(args[i]);
                    }
                this.trigger('beforerun', [this]); // call before run event

                var dst = this.func.apply(this, _args);
                this.count++; // increasing the number of calls to a function
                this.trigger('run'); // call run event
                this.trigger('callback', [dst, this]); // call callback event
                return dst;
            }
        };

        hook.trigger('initialize', [hook]);

        if (!is_array(hooks[options.name]))
            hooks[options.name] = [];

        hooks[options.name].push(hook);

        return hook;
    };

    /**
     * Get hooks by name.
     *
     * @param {string} name Hook name
     *
     * @returns {*}
     */
    var get = function (name) {
        if (hooks.hasOwnProperty(name))
            return hooks[name];
        return [];
    };

    /**
     * Remove hook.
     * @param {string} name Hook name
     * @returns {remove}
     */
    var remove = function (name) {
        if (hooks.hasOwnProperty(name))
            delete hooks[name];

        return this;
    };

    /**
     * Run hooks.
     *
     * If name information is not sent, all hooks are run.
     * If any hook returns false, the hook operation is stopped.
     *
     * @param {string} name Hook name
     * @param {Array} [args = Array] Send params
     * @returns {run}
     */
    var run = function (name, args) {
        var hook_list = is_undefined(name) ? hooks : [get(name)];
        for (var i in hook_list) {
            if (hook_list.hasOwnProperty(i)) {
                for (var j in hook_list[i]) {
                    if (hook_list[i].hasOwnProperty(j)) {
                        var dst = hook_list[i][j].run(args);
                        if (dst === false)
                            break;
                    }
                }
            }
        }

        return this;
    };

    return {
        add: add,
        get: get,
        remove: remove,
        run: run
    };
}();

/**
 * Add hooks.
 * @param opts
 * @returns {Object}
 * @constructor
 */
function Hook(opts) {
    return MXHook.add(opts);
}