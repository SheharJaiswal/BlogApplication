const initialState=[
    {
        id:0,
        title:'Making customers more successful is key to bussiness Growth',
        categories:'services',
        content:'We weren surprised to learn that growing companies are more likely to prioritize customer success than companies with stagnating revenues.Customer success is an investment in your business growth -- not a cost-center. Customer success helps you engage and guide customers to help them grow into happy power users, and these satisfied advocates will recommend your brand and help grow your business as fast as sales and marketing',
        like:10
    },
    {
        id:1,
        title:'The 5 Main Sales Productivity Metrics Managers Track in 2022 ',
        categories:'sales',
        content:"Any company's sales leadership needs to keep a pulse on how its salespeople are performing, both individually and on a broader organizational level — getting there often starts by understanding the degree of effort reps are putting in. That's where performance indicators known as sales productivity metrics come in.",
        like:30
    },

];
const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_POST':
            state=[...state,action.payload];
            return state;
        case 'UPDATE_POST':
            const updateState =state.map(post=>post.id === action.payload.id?action.payload:post)
            state=updateState;
            return state;
        case 'DELETE_POST':
            const filterPosts = state.filter(post=>post.id 
                === action.payload ?null: post);
            state=filterPosts;
            return state;
        default:
            return state;
    }
};
export default postReducer