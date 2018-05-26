export const ratings = {
    BEGINNER: "BEGINNER",
    PROFICIENT: "PROFICIENT",
    EXPERT: "EXPERT"
};

export function getRating(score) {
    if (score === 100) {
        return ratings.EXPERT;
    } else if (score > 80) {
        return ratings.PROFICIENT;
    } else {
        return ratings.BEGINNER;
    }
}
