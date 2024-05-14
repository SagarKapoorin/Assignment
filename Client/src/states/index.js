import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals_completed:0,
    goals:[
        {
            name:'Workout for 20 mins',
            img:'D',
            Color:'#9E4CB8',
            completed:false,
        },
        {
            name:'Read Book for 15 mins',
            img:'A',
            Color:'#D15439',
            completed:false,
        },
        {
            name:' 30 mins Walk',
            img :'B',
            Color:'#81B47D',
            completed:false,
        },
        {
            name:'Sleep at 11 sharp',
            img:'E',
          Color:'#63A7A7',
            completed:false,
        },
        {
            name:'Drink 3L water',
            img :'C',
            Color:'#5A92CB',
            completed:false,
        },

    ]
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setGoals: (state) => {
      state.goals_completed +=1 ;
    },
    setCompletedAll: (state) => {
        const updatedGoals = state.goals.map((goal) => {
            return { ...goal, completed: true }; 
        });
        state.goals=updatedGoals;
    },
   setGoalsTrue:(state,action)=>{
    const  name  = action.payload; 
    console.log(name);
    const updatedGoals = state.goals.map((goal) => {
      if (goal.name === name) {
        return { ...goal, completed: true };
      } else {
        return goal;
      }
    });
    // console.log("----------------------------");
    state.goals = updatedGoals;
    // console.log(state.goals);
   }
  },
});

export const { setCompletedAll, setGoals, setGoalsTrue } =
  authSlice.actions;
export default authSlice.reducer;