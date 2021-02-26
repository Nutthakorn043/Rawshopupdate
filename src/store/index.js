import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nut1: 0,
    nut2: 0,
    nut3: 0,
    nut4: 0,
    nut5: 0,
    nut6: 0,
    nut7: 0,
    nut8: 0,
    nut9: 0,
    nut10: 0,
    nut11: 0,
    nut12: 0,
    nut13: 0,
    Item: [
      { id: 1, title: "Nike Heritage86"},
      { id: 2, title: "Nike Liverpool86"},
      { id: 3, title: "Paris Saint-7"},
      { id: 4, title: "Jordan Jumpman"},
      { id: 5, title: "Jordan Dri-FIT"},
      { id: 6, title: "Nike Swoosh"},
      { id: 7, title: "Nike Advantage"},
      { id: 8, title: "Nike ACG"},
      { id: 9, title: "NikeCourt"},
      { id: 10, title: "Nike Heritage86"},
      { id: 11, title: "Nike Tailwind Fast"},
      { id: 12, title: "Nike Pro Rayguns"}
    ],
     showList: []
},
 
  mutations: {
    nutI1: state => {
      return (
      state.nut1++,
      (state.nut13 += 550),
      state.showList.push([{ id: 1 , title:"Nike Heritage86" }])
);
    },
    nutI2: state =>{
     return (
      state.nut2++,
      (state.nut13 += 950),
      state.showList.push([{ id: 2 , title:"Nike Liverpool86" }])
);
    },
    nutI3: state =>{
     return (
      state.nut3++,
      (state.nut13 += 850),
      state.showList.push([{ id: 3 , title:"Paris Saint-7" }])
);
    },
    nutI4: state =>{
     return (
      state.nut4++,
      (state.nut13 += 1850),
      state.showList.push([{ id: 4 , title:"Jordan Jumpman" }])
);
    },
   nutI5: state =>{
    return ( 
    state.nut5++,
      (state.but13 += 690),
      state.showList.push([{ id: 5 , title:"Jordan Dri-FIT" }])
);
    },
    nutI6: state =>{
     return (
      state.nut6++,
      (state.nut13 += 590),
      state.showList.push([{ id: 6 , title:"Nike Swoosh" }])
);
    },
      nutI7: state =>{
     return (
        state.nut7++,
      (state.nut13 += 850),
      state.showList.push([{ id: 7 , title:"Nike Advantage" }])
);
    },
      nutI8:state => {
     return (
        state.nut8++,
      (state.nut13 += 990),
      state.showList.push([{ id: 8 , title:"Nike ACG" }])
);
    },
      nutI9: state =>{
     return (
        state.nut9++,
      (state.nut13 += 900),
      state.showList.push([{ id: 9 , title:"NikeCourt" }])
);
    },
      nutI10: state =>{
      return (
        state.nut10++,
      (state.nut13 += 896),
      state.showList.push([{ id: 10 , title:"Nike Heritage86" }])
);
    },
      nutI11: state =>{
      return (
        state.nut11++,
      (state.nut13 += 850),
      state.showList.push([{ id: 11 , title:"Nike Tailwind Fast" }])
);
    },
      nutI12: state =>{
     return (
        state.nut12++,
      (state.nut13 += 950),
      state.showList.push([{ id: 12 , title:"Nike Pro Rayguns" }])
);
    },
    CancelItem1: state => {
      if (state.nut1 > 0) {
        return (
        state.nut1--,
        (state.nut13 -= 550),
        state.showList.pop(state.Item)
        );
      }
    },
    CancelItem2:state => {
      if (state.nut2 > 0) {
       return (
        state.nut2--,
        (state.nut13 -= 950),
        state.showList.pop(state.Item)
        );
      }
    },
    CancelItem3:state => {
      if (state.nut3 > 0) {
       return (
        state.nut3--,
        (state.nut13 -= 850),
        state.showList.pop(state.Item)
        );
      }
    },
    CancelItem4:state => {
      if (state.nut4 > 0) {
       return (
        state.nut4--,
        (state.nut13 -= 1850),
        state.showList.pop(state.Item)
        );
      }
    },
    CancelItem5:state => {
      if (state.nut5 > 0) {
       return (
        state.nut5--,
        (state.nut13 -= 690),
        state.showList.pop(state.Item)
        );
      }
    },
    CancelItem6:state => {
      if (state.nut6 > 0) {
       return (
        state.nut6--,
        (state.nut13 -= 590),
        state.showList.pop(state.Item)
        );
      }
    },
        CancelItem7:state => {
      if (state.nut7 > 0) {
       return (
        state.nut7--,
        (state.nut13 -= 850),
        state.showList.pop(state.Item)
        );
      }
    },
        CancelItem8:state => {
      if (state.nut8 > 0) {
       return (
        state.nut8--,
        (state.nut13 -= 990),
        state.showList.pop(state.Item)
        );
      }
    },
        CancelItem9:state => {
      if (state.nut9 > 0) {
       return (
        state.nut9--,
        (state.nut13 -= 900),
        state.showList.pop(state.Item)
        );
      }
    },
        CancelItem10:state => {
      if (state.nut10 > 0) {
       return (
        state.nut10--,
        (state.nut13 -= 896),
        state.showList.pop(state.Item)
        );
       }
    },
        CancelItem11:state => {
      if (state.nut11 > 0) {
       return (
        state.nut11--,
        (state.nut13 -= 850),
        state.showList.pop(state.Item)
        );
      }
    },
        CancelItem12:state => {
      if (state.nut12 > 0) {
       return (
        state.nut12--,
        (state.nut13 -= 959),
        state.showList.pop(state.Item)
        );
      }
    },
  
    CancelAllItem: (state, Item) => {
      if (state.nut13 > 0) {
        return (
        (state.nut1 = 0),
        state.showList.pop(Item),
          (state.nut2 = 0),
          state.showList.pop(Item),
          (state.nut3 = 0),
          state.showList.pop(Item),
          (state.nut4 = 0),
          state.showList.pop(Item),
          (state.nut5 = 0),
          state.showList.pop(Item),
          (state.nut6 = 0),
          state.showList.pop(Item),
          (state.nut7 = 0),
          state.showList.pop(Item),
          (state.nut8 = 0),
          state.showList.pop(Item),
          (state.nut9 = 0),
          state.showList.pop(Item),
          (state.nut10 = 0),
          state.showList.pop(Item),
          (state.nut11 = 0),
          state.showList.pop(Item),
          (state.nut12 = 0),
          state.showList.pop(Item),
          (state.nut13 = 0),
          state.showList.pop(Item)
          );
        }
      },
      say: function(state) {
        if (state.nut13 != 0) {
          alert("ท่านได้ชำระเงินรายการสินค้านี้แล้ว ขอบคุณที่ใช้บริการ");
        } else if (state.nut13 <= 0) {
          alert("ท่านได้ชำระเงินรายการสินค้านี้แล้ว ขอบคุณที่ใช้บริการ");
        }
      }
    },
  actions: {},
  modules: {}
});
