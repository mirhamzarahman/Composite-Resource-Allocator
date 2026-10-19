/**
 * Composite Resource Allocator
 *
 * Demonstrates a deterministic allocation strategy that divides
 * a requested workload into two valid composite resource blocks.
 */

class CompositeResourceAllocator {
    /**
     * Allocate workload into two composite resource blocks.
     * @param {number} totalCapacity
     * @returns {{primary:number, secondary:number}}
     */
    allocate(totalCapacity) {
        if (totalCapacity < 12) {
            throw new Error("Minimum supported capacity is 12.");
        }

        // Even requests use a base allocation of 4.
        if (totalCapacity % 2 === 0) {
            return {
                primary: 4,
                secondary: totalCapacity - 4
            };
        }

        // Odd requests use a base allocation of 9.
        return {
            primary: 9,
            secondary: totalCapacity - 9
        };
    }
}

// Example Usage

const allocator = new CompositeResourceAllocator();

const requestedCapacity = 31;

const allocation = allocator.allocate(requestedCapacity);

console.log("Requested Capacity:", requestedCapacity);
console.log("Primary Block:", allocation.primary);
console.log("Secondary Block:", allocation.secondary);
