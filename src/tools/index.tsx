type OptionsType = {
    year: "numeric" | "2-digit" | undefined;
    month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day: "numeric" | "2-digit" | undefined;
}
export const generateDate = (postId: number) => {
    const baseDate = new Date('2018-01-01');
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const date = new Date(baseDate.getTime() + (postId * 12) * millisecondsInADay);
    const options: OptionsType = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
