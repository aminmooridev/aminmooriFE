<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-10 q-gutter-y-xl">
        <div class="row">
          <div class="col-12 relative-position text-center">
            <div class="text-grey-3 text-h2">ارتباط</div>
            <div class="absolute-center text-h5">با من در <q-span class="text-positive">ارتباط</q-span> باشید</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 q-gutter-y-md">
            <div class="text-h6">خجالتی نباش !</div>
            <div>با من احساس راحتی کنید و در تماس باشید . من همیشه برای گفت و گو در مورد پروژه‌های جدید , ایده‌های خلاقانه شما و فرصت‌های طلایی آماده هستم.</div>
            <div class="row q-gutter-y-md">
              <div class="col-2">
                <q-icon name="drafts" color="positive" size="lg"/>
              </div>
              <div class="col-10">
                <q-span class="text-grey">میل بزنید</q-span>
                <div>aminmoori.dev@gmail.com</div>
              </div>
              <div class="col-2">
                <q-icon name="call" color="positive" size="lg"/>
              </div>
              <div class="col-10">
                <q-span class="text-grey">تماس بگیرید</q-span>
                <div>(+98) 4884 885 935</div>
              </div>
            </div>
            <div class="row q-gutter-x-sm">
              <q-btn unelevated round color="positive">
                <q-icon name="ios-ion-logo-github"/>
              </q-btn>
              <q-btn unelevated round color="positive">
                <q-icon name="ion-ios-logo-instagram"/>
              </q-btn>
              <q-btn unelevated round color="positive">
                <q-icon name="ion-ios-logo-whatsapp"/>
              </q-btn>
              <q-btn unelevated round color="positive">
                <q-icon name="ion-ios-logo-twitter"/>
              </q-btn>
              <q-btn unelevated round color="positive">
                <q-icon name="ion-ios-logo-youtube"/>
              </q-btn>
            </div>
          </div>
          <div class="col-8">
            <div class="row q-col-qutter-md">
              <div class="col-4 q-pa-md">
                <q-input color="positive" rounded outlined v-model="nameFamily" label="نام و نام خانوادگی" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input color="positive" rounded outlined v-model="email" label="ایمیل" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input color="positive" rounded outlined v-model="subject" label="موضوع" />
              </div>
              <div class="col-12 q-pa-md">
                <q-input
                  color="positive"
                  label="پیام"
                  rounded
                  outlined
                  type="textarea"
                />
              </div>
              <div class="col-12 q-pa-md">
                <q-btn class="q-pt-xs q-pb-xs q-pl-lg q-pr-lg" rounded unelevated color="positive" label="ارسال پیام"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      nameFamily: '',
      email: '',
      subject: ''
    }
  }
}
</script>
