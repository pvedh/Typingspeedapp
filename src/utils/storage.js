export const saveResults = (results) => {
    localStorage.setItem('typingTestResults', JSON.stringify(results));
};

export const getResults = () => {
    const results = localStorage.getItem('typingTestResults');
    return results ? JSON.parse(results) : null;
};

export const clearResults = () => {
    localStorage.removeItem('typingTestResults');
};