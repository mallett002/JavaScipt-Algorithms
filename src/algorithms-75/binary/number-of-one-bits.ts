

export const hammingWeight = (n: number): number => {
    const binary = n.toString(2);
    
    return binary.split('').filter((it) => it !== '0').length;
};
