function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [];
    let n1 = 0, n2 = 0;
    for (let k = 0; k < nums1.length + nums2.length; ++k) {
        const min = 
        nums1[n1] != undefined ? nums2[n2] != undefined ? Math.min(nums1[n1], nums2[n2]) : nums1[n1] : nums2[n2]
        if (min == nums1[n1]) ++n1; else ++n2
        merged.push(min);
    }
    return merged.length%2 == 0  ?
    (merged[merged.length/2] + merged[merged.length/2 - 1])/2 :
    merged[Math.floor(merged.length/2)]
};