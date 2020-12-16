Component({
  properties:{

  },

  data: {
    tabs:[
      {
        id:0,
        name:"挂人区",
        isActive:true
      },
      {
        id:1,
        name:"吐槽区",
        isActive:false
      },
      {
        id:2,
        name:"咨询区",
        isActive:false
      }
    ]
  },

  methods:{
    handleItemTap(e){
      //获取索引
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})