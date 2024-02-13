function maxArea(height: number[]): number {
    let L = 0;
    let R = height.length - 1;
    let maxSurface = 0;
    while (L != R) {
        let surface = Math.min(height[R], height[L])*(R - L)
        maxSurface = Math.max(surface, maxSurface);
        if (height[L] < height[R]) {
            L++
        } else {
            R--
        }
    }
    return maxSurface;
};
