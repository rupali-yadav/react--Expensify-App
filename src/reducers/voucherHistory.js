const voucherHistoryReducerDefaultState = {
    sortBy: "All"
};
const voucherHistoryReducer = (state = voucherHistoryReducerDefaultState, action) => {
    switch (action.type) {
        case "SORT_BY_REDEEMED":
            return {
                sortBy: "Redeemed"
            };
        case "SORT_BY_TRANSFERRED":
            return {
                sortBy: "Transferred"
            };
        case "SORT_BY_PURCHASED":
            return {
                sortBy: "Purchased"
            };
        case "SHOW_All":
            return {
                sortBy: "All"
            };
        default:
            return state;
    };
}
export default voucherHistoryReducer;