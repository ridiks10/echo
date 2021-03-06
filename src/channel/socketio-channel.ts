import { EventFormatter } from './../util';
import { Channel } from './channel';

/**
 * This class represents a Socket.io channel.
 */
export class SocketIoChannel extends Channel {

    /**
     * Channel object.
     *
     * @type {object}
     */
    channel: any;

    /**
     * The event formatter.
     *
     * @type {EventFormatter}
     */
    eventFormatter: EventFormatter;

    /**
     * Create a new class instance.
     *
     * @param  {object}  channel
     * @param  {any}  options
     */
    constructor(channel: any, options: any) {
        super();

        this.channel = channel;
        this.options = options;
        this.eventFormatter = new EventFormatter;

        if (this.options.namespace) {
            this.eventFormatter.namespace(this.options.namespace);
        }
    }

    /**
     * Listen for an event on the channel instance.
     *
     * @param  {string} event
     * @param  {Function} callback
     * @return {SocketIoChannel}
     */
    listen(event: string, callback: Function): SocketIoChannel {
        this.on(this.eventFormatter.format(event), callback);

        return this;
    }

    /**
     * Bind a channel to an event.
     *
     * @param  {string}   event
     * @param  {Function} callback
     */
    on(event: string, callback: Function) {
        this.channel.on(event, callback);
    }
}
