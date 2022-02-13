"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocation = exports.Location = void 0;
class Location {
    constructor(nodeId, nodePath, portType = "o", portIndex = 0) {
        this.inSubflow = false;
        this.id = nodeId;
        this.path = nodePath;
        this.portType = portType;
        this.portIndex = portIndex;
    }
    getBreakpointLocation() {
        if (this.inSubflow) {
            return `*/${this.id}[${this.portType}][${this.portIndex}]`;
        }
        else {
            return this.toString();
        }
    }
    toString() {
        return `${this.path}/${this.id}[${this.portType}][${this.portIndex}]`;
    }
}
exports.Location = Location;
function createLocation(event) {
    let node;
    let portType;
    let portIndex;
    if (event.hasOwnProperty("source")) {
        node = event.source.node;
        portType = "o";
        portIndex = event.source.port;
    }
    else {
        node = event.destination.node;
        portType = "i";
        portIndex = 0;
    }
    const l = new Location(node._alias || node.id, node._flow.path, portType, portIndex);
    if (node._alias) {
        l.inSubflow = true;
    }
    return l;
}
exports.createLocation = createLocation;
//# sourceMappingURL=location.js.map