<template>
<div id="app">
 <b-navbar toggleable type="dark" variant="faded" class="shadow p-3 mb-5 bg-white rounded">
        
    <b-navbar-brand href="#"><img src="https://i.pinimg.com/originals/f1/94/ab/f194ab1b443c79b411e649736c141449.png" style="max-width: 10rem;"  alt=""></b-navbar-brand>
    

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-navbar-nav class="ml-auto">
      
    <b-button variant="dark" id="show-btn" @click="$bvModal.show('bv-modal-example2')">{{$store.state.nut1+$store.state.nut2+$store.state.nut3+$store.state.nut4+$store.state.nut5+$store.state.nut6+$store.state.nut7+$store.state.nut8+$store.state.nut9+$store.state.nut10+$store.state.nut11+$store.state.nut12}}<b-icon icon="cart3"></b-icon></b-button>

  <b-modal  size="lg" id="bv-modal-example2" hide-footer>
    <template #modal-title>
        <a><img src="https://i.pinimg.com/originals/f1/94/ab/f194ab1b443c79b411e649736c141449.png" style="max-width: 5rem;"></a>
    </template>
    <div class="d-block text-center">
       <h4>รายการสินค้า
      <hr />
      <header class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        <div v-if="$store.state.nut1 >= 1">
    <img src="https://shorturl.asia/JIq5e" width="60"  height=“60”>
    <p1> x{{ $store.state.nut1 }} </p1>
  </div>
          <div v-if="$store.state.nut2 >= 1">
    <img src="https://shorturl.asia/ZivLC" width="60"  height=“60”>
    <p1> x{{ $store.state.nut2 }} </p1>
  </div>
         <div v-if="$store.state.nut3 >= 1">
    <img src="https://shorturl.asia/8U9jr" width="60"  height=“60”>
    <p1> x{{ $store.state.nut3 }} </p1>
  </div>
         <div v-if="$store.state.nut4 >= 1">
    <img src="https://shorturl.asia/FJZMt" width="60"  height=“60”>
    <p1> x{{ $store.state.nut4 }} </p1>
  </div>
         <div v-if="$store.state.nut5 >= 1">
    <img src="https://shorturl.asia/fpx6U" width="60"  height=“60”>
    <p1> x{{$store.state.nut5 }} </p1>
  </div>
         <div v-if="$store.state.nut6 >= 1">
    <img src="https://shorturl.asia/0iTN7" width="60"  height=“60”>
    <p1> x{{ $store.state.nut6 }} </p1>
  </div>
         <div v-if="$store.state.nut7 >= 1">
    <img src="https://shorturl.asia/UWLIF" width="60"  height=“60”>
    <p1> x{{ $store.state.nut7 }} </p1>
  </div>
         <div v-if="$store.state.nut8 >= 1">
    <img src="https://shorturl.asia/ovj1k" width="60"  height=“60”>
    <p1> x{{ $store.state.buy8 }} </p1>
  </div>
         <div v-if="$store.state.nut9 >= 1">
    <img src="https://shorturl.asia/fpx6U" width="60"  height=“60”>
    <p1> x{{ $store.state.nut9 }} </p1>
  </div>
         <div v-if="$store.state.nut10 >= 1">
    <img src="https://shorturl.asia/zHykl" width="60"  height=“60”>
    <p1> x{{ $store.state.nut10 }} </p1>
  </div>
         <div v-if="$store.state.nut11 >= 1">
    <img src="https://shorturl.asia/MbG3U" width="60"  height=“60”>
    <p1> x{{ $store.state.nut11 }} </p1>
  </div>
         <div v-if="$store.state.nut12 >= 1">
    <img src="https://shorturl.asia/3Okcv" width="60"  height=“60”>
    <p1> x{{ $store.state.nut12 }} </p1>
  </div>
  </header>
    </h4>
    <h1>ราคารวม = {{ $store.state.nut13 }} บาท</h1>

    <b-button variant="outline-success" @click="$store.commit('CancelAllItem')" v-on:click="$store.commit('say')">ชำระเงิน</b-button>

    <b-button variant="outline-danger" @click="$store.commit('CancelAllItem')">
      ยกเลิกการสั่งซื้อ
    </b-button>
    </div>
    
  </b-modal>

    </b-navbar-nav>
</b-navbar>
<main class="container">
     
    
    <h1>NEW ARRIVALS</h1> 
<hr />
 {{ $store.state.showList}} 
    <b-card-group deck>
      
       <b-card
          id:1
          title="Nike Heritage86"
          img-src="https://shorturl.asia/JIq5e"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
            ฿550
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark" @click="$store.commit('nutI1')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut1}}
                  <span class="sr-only">unread messges</span></b-badge
>
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem1')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
            <b-card
          id:2
          title="Nike Liverpool86"
          img-src="https://shorturl.asia/ZivLC"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
            ฿950
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI2')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut2}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem2')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
          <b-card
          id:3
          title="Paris Saint-7"
          img-src="https://shorturl.asia/8U9jr"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
            ฿850
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI3')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut3}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem3')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
         <b-card
          id:4
          title="Jordan Jumpman"
          img-src="https://shorturl.asia/FJZMt"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
            ฿1850
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI4')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut4}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem4')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
        
    </b-card-group>
    <h1></h1>
    <hr />
    <h1>SHOP ALL</h1>
    <hr />
    <b-card-group deck>
          <b-card
          id:5
          title="Jordan Dri-FIT"
          img-src="https://shorturl.asia/fpx6U"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
           ฿690
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI5')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut5}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem5')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
         <b-card
          id:6
          title="Nike Swoosh"
          img-src="https://shorturl.asia/0iTN7"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
           ฿590
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI6')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut6}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem6')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
        
      
        <b-card
          id:7
          title="Nike Advantage"
          img-src="https://shorturl.asia/UWLIF"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
          ฿850
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI7')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut7}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem7')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
     
          <b-card
          id:8
          title="Nike ACG"
          img-src="https://shorturl.asia/ovj1k"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
           ฿990
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI8')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut8}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem8')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
    
    </b-card-group>
<hr />
    <b-card-group deck>
    <b-card
          id:9
          title="NikeCourt"
          img-src="https://shorturl.asia/fpx6U"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
           ฿900
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI9')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut9}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem9')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

          <b-card
          id:10
          title="Nike Heritage86"
          img-src="https://shorturl.asia/zHykl"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
           ฿896
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI10')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut10}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem10')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

          <b-card
          id:11
          title="Nike Tailwind Fast"
          img-src="https://shorturl.asia/MbG3U"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
            ฿850
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI11')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut11}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem11')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>

      <b-card
          id:12
          title="Nike Pro Rayguns"
          img-src="https://shorturl.asia/3Okcv"
          img-alt="Image"
          style="max-width: 15rem;"
          img-top
        >
          <b-card-text>
          ฿959
          </b-card-text>
          <template #footer>
            <small class="text-muted">
              <b-button variant="outline-dark"  @click="$store.commit('nutI12')">
                Add<b-badge variant="light"
                  >{{ $store.state.nut12}}<span class="sr-only">unread messges</span></b-badge
                >
              </b-button>
              <span class="sr-only">unread messges</span></b-badge
                >
              <b-button variant="outline-dark" @click="$store.commit('CancelItem12')">
                Cancel
              </b-button></small
            >
          </template>
        </b-card>
    </b-card-group>
    <div>
    
    <hr />
  <b-button variant="outline-dark" id="show-btn" @click="$bvModal.show('bv-modal-example')">กดยืนยันการสั่งซื้อ</b-button>

  <b-modal  size="lg" id="bv-modal-example" hide-footer>
    <template #modal-title>
       <a><img src="https://i.pinimg.com/originals/f1/94/ab/f194ab1b443c79b411e649736c141449.png" style="max-width: 5rem;"></a>
    </template>
    <div class="d-block text-center">
       <h4>รายการสินค้า
      <hr />
      <header class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
        <div v-if="$store.state.nut1 >= 1">
    <img src="https://shorturl.asia/JIq5e" width="60"  height=“60”>
    <p1> x{{ $store.state.nut1 }} </p1>
  </div>
          <div v-if="$store.state.nut2 >= 1">
    <img src="https://shorturl.asia/ZivLC" width="60"  height=“60”>
    <p1> x{{ $store.state.nut2 }} </p1>
  </div>
         <div v-if="$store.state.nut3 >= 1">
    <img src="https://shorturl.asia/8U9jr" width="60"  height=“60”>
    <p1> x{{ $store.state.nut3 }} </p1>
  </div>
         <div v-if="$store.state.nut4 >= 1">
    <img src="https://shorturl.asia/FJZMt" width="60"  height=“60”>
    <p1> x{{ $store.state.nut4 }} </p1>
  </div>
         <div v-if="$store.state.nut5 >= 1">
    <img src="https://shorturl.asia/fpx6U" width="60"  height=“60”>
    <p1> x{{$store.state.nut5 }} </p1>
  </div>
         <div v-if="$store.state.nut6 >= 1">
    <img src="https://shorturl.asia/0iTN7" width="60"  height=“60”>
    <p1> x{{ $store.state.nut6 }} </p1>
  </div>
         <div v-if="$store.state.nut7 >= 1">
    <img src="https://shorturl.asia/UWLIF" width="60"  height=“60”>
    <p1> x{{ $store.state.nut7 }} </p1>
  </div>
         <div v-if="$store.state.nut8 >= 1">
    <img src="https://shorturl.asia/ovj1k" width="60"  height=“60”>
    <p1> x{{ $store.state.buy8 }} </p1>
  </div>
         <div v-if="$store.state.nut9 >= 1">
    <img src="https://shorturl.asia/fpx6U" width="60"  height=“60”>
    <p1> x{{ $store.state.nut9 }} </p1>
  </div>
         <div v-if="$store.state.nut10 >= 1">
    <img src="https://shorturl.asia/zHykl" width="60"  height=“60”>
    <p1> x{{ $store.state.nut10 }} </p1>
  </div>
         <div v-if="$store.state.nut11 >= 1">
    <img src="https://shorturl.asia/MbG3U" width="60"  height=“60”>
    <p1> x{{ $store.state.nut11 }} </p1>
  </div>
         <div v-if="$store.state.nut12 >= 1">
    <img src="https://shorturl.asia/3Okcv" width="60"  height=“60”>
    <p1> x{{ $store.state.nut12 }} </p1>
  </div>
  </header>
    </h4>
    <h1>ราคารวม = {{ $store.state.nut13 }} บาท</h1>

    <b-button variant="outline-success" @click="$store.commit('CancelAllItem')" v-on:click="$store.commit('say')">ชำระเงิน</b-button>

    <b-button variant="outline-danger" @click="$store.commit('CancelAllItem')">
      ยกเลิกการสั่งซื้อ
    </b-button>
    </div>
    
  </b-modal>
 <hr />
</div>
       
    <div>
     </div>
 
    </main>
  </div>
</template>

<script>


export default {};
</script>
