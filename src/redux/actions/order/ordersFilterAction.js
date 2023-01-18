import httpProvider from "../../../providers/httpProvider";

const ordersFilterAction = (filterData) => async dispatch => {
    console.log(filterData)
    try {
        const response = await httpProvider.get(`manage/order?state=${filterData.state}&start_at=${filterData.start_at}&end_at=${filterData.end_at}`
        )
    }catch (e){

    }
}

export default ordersFilterAction;