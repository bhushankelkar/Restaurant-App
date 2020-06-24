<template>
  <q-layout view="lHr lpR fFf">
      <q-header elevated class="bg-grey-10 text-white" height-hint="98">
<div class="row">
    
      <div class="col-11">
       
       <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <q-toolbar-title b>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
           </q-toolbar-title>
      </q-toolbar>
      </div>
      <div class="col">
        
<!--         
        <q-icon name="account_circle" class="right" style="font-size: 32px;"/> -->
        <!-- <q-btn icon="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg" ... />
        <q-icon name="img:statics/my/path/to/some.svg" /> -->
       </div>
       </div>
      <q-tabs align="left">
        <q-route-tab to="/page1" label="My Progress" />
        <q-route-tab to="/page2" label="Leaderboard" />
        <q-route-tab to="/page3" label="About" />
      </q-tabs>

    </q-header> 
        <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
        content-class="bg-grey-10"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; ">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar >
                <q-icon name="inbox"  style="color:white" />
              </q-item-section>

              <q-item-section  style="color:white">
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section style="color:white">
               Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  style="color:white">
              <q-item-section avatar  style="color:white">
                <q-icon name="send" />
              </q-item-section>

              <q-item-section  style="color:white">
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple  style="color:white">
              <q-item-section avatar  style="color:white">
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section  style="color:white">
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

     
  

  <q-page-container>
      <router-view />
    </q-page-container>
 
    
 </q-layout>
 
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
export default {
  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>