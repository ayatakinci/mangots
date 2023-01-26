<template>
  <section>
    <div class="logon-header headerModal" id="logonHeader">
      <div class="menuTabs">
        <div class="tabs">
          <div class="tab">
            <p class="tab-title loginTab active">Giriş yap</p>
           
          </div>
          <div class="tab">
            <p class="tab-title registerTab">Kayıt ol</p>
          
          </div>
        </div>
      </div>
    </div>
    <div
      data-pais="052"
      class="main-content container-fluid login bannerShoppingNight"
    >
      <div class="main-contentContainer">
       

        <div id="mainDivBody2" class="main-vertical-body main-body-wrapper">
          <div class="row-fluid">
            <div id="SVLoginCheck:customFormParent">
              <div class="mngCSS">
                <div class="loginSignup landing">
                  <div id="content-background"></div>

                  <div id="content-modal" class="logon-content">
                    <div
                      class="tooltip-popUp tooltip-remember-popUp dark tooltip-js"
                      data-tooltip-id="remember"
                    >
                      <div class="tooltip-container">
                        <div class="tooltip-block">
                          <div id="tooltipContent" class="tooltip-content">
                            <p>
                              Eğer 'Beni hatırla' seçeneğini işaretlerseniz,
                              tekrar giriş yapmak zorunda kalmadan,
                              kullandığınız cihazdan ve tarayıcıdan hesabınıza
                              ulaşabilirsiniz.
                            </p>
                            <p>
                              Bu seçeneği ancak güvenli bir cihazdan
                              bağlanıyorsanız seçmenizi öneririz.
                            </p>
                          </div>
                          <div class="tooltip-button">OK</div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="containerScroll logon-body"
                      style="
                        height: 460px;
                        overflow: hidden;
                        padding: 0px;
                        width: 1304px;
                      "
                    >
                      <div
                        class="jspContainer"
                        style="width: 1304px; height: 460px"
                      >
                        <div
                          class="jspPane"
                          style="
                            padding: 0px;
                            top: 0px;
                            left: 0px;
                            width: 1304px;
                          "
                        >
                          <div class="logon-body-wrapper" id="logonBodyWrapper">
                            <div class="modal-content loginModal active">
                              <form
                                id="SVLoginCheck:FRegLogChk"
                                name="SVLoginCheck:FRegLogChk"
                                class="loginForm customFormIdloginForm"
                              >
                                <div class="formErrors"></div>

                                <div class="inputContent">
                                  <label
                                    class="visuallyhidden"
                                    for="SVLoginCheck:FRegLogChk:userMail"
                                    >E-posta</label
                                  >
                                  <div
                                    class="eac-input-wrap"
                                    style="
                                      display: inline-block;
                                      position: relative;
                                      font-size: 13px;
                                    "
                                  >
                                    <input
                                      id="SVLoginCheck:FRegLogChk:userMail"
                                      name="SVLoginCheck:FRegLogChk:userMail"
                                      value=""
                                      maxlength="120"
                                      class="emailSuggest error"
                                      placeholder="E-posta"
                                      type="email"
                                    /><span
                                      class="eac-sugg"
                                      style="
                                        display: block;
                                        box-sizing: content-box;
                                        line-height: normal;
                                        padding-top: 10.25px;
                                        padding-bottom: 10.25px;
                                        font-family: mango-light, arial,
                                          helvetica, verdana, sans-serif;
                                        font-weight: 400;
                                        letter-spacing: 0.3px;
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                      "
                                    ></span
                                    ><span
                                      class="eac-cval"
                                      style="
                                        visibility: hidden;
                                        position: absolute;
                                        display: inline-block;
                                        font-family: mango-light, arial,
                                          helvetica, verdana, sans-serif;
                                        font-weight: 400;
                                        letter-spacing: 0.3px;
                                      "
                                    ></span>
                                  </div>

                                  <div
                                    id="userMailErrorLabel"
                                    class="errorValidation"
                                    aria-live="assertive"
                                    role="alert"
                                  >
                                    <span
                                      >Bu alanın doldurulması zorunludur.</span
                                    >
                                  </div>
                                </div>

                                <div class="inputContent">
                                  <label
                                    class="visuallyhidden"
                                    for="SVLoginCheck:FRegLogChk:chkPwd"
                                    >Parola</label
                                  ><input
                                    type="password"
                                    id="SVLoginCheck:FRegLogChk:chkPwd"
                                    name="SVLoginCheck:FRegLogChk:chkPwd"
                                    maxlength="30"
                                    class=""
                                    placeholder="Parola"
                                    autocapitalize="none"
                                  />

                                  <div
                                    id="chkPwdErrorLabel"
                                    class="errorValidation"
                                    aria-live="assertive"
                                    role="alert"
                                  ></div>
                                </div>

                                <div class="checkboxContent">
                                  <div class="labelCheckbox">
                                    <input
                                      id="SVLoginCheck:FRegLogChk:loginAuto"
                                      type="checkbox"
                                      name="SVLoginCheck:FRegLogChk:loginAuto"
                                      checked="checked"
                                      value="true"
                                    /><label
                                      for="SVLoginCheck:FRegLogChk:loginAuto"
                                      >Beni hatırla
                                      <span
                                        class="tooltip-link tooltip-remember-link dark tooltip-trigger-js"
                                        >+ info</span
                                      ></label
                                    >
                                  </div>
                                </div>

                                <div class="submitContent">
                                  <input
                                    id="SVLoginCheck:FRegLogChk:j_id_6r"
                                    name="SVLoginCheck:FRegLogChk:j_id_6r"
                                    type="submit"
                                    value="Giriş"
                                    onclick="var cf = function(){return formController.setSubmitValidation(this);};var oamSF = function(){};return (cf.apply(this, [])==false)? false : oamSF.apply(this, []); "
                                  />
                                </div>

                                <div class="labelContent">
                                  <a
                                    href="https://shop.mango.com/tr/resetpassword"
                                    class="link"
                                  >
                                    <span>Parolanızı unuttunuz mu?</span>
                                  </a>
                                </div>
                                <div class="separatorContent">
                                  <div class="separator"></div>
                                </div>

                                <div class="labelContent">
                                  <span>Hesabınız yok mu?</span>
                                  <a class="registerTab"
                                    ><span>Kayıt ol</span></a
                                  >
                                </div>

                                <input
                                  type="hidden"
                                  name="SVLoginCheck:FRegLogChk_SUBMIT"
                                  value="1"
                                /><input
                                  type="hidden"
                                  name="javax.faces.ViewState"
                                  id="j_id__v_0:javax.faces.ViewState:7"
                                  value="PBHPI/LWUQfb5YDUFF+Hyxx3vLNpoCL/kyRUcPef8tiLKt4G
"
                                />
                              </form>
                            </div>
                            <div
                              id="registerModalA"
                              class="modal-content registerModal"
                            >
                              <div class="info">
                                <p
                                  class="newsletter-register-title registro-heading-loyalty"
                                >
                                  <loyalty-literal
                                    loyaltykey="form.registrate.crea.cuenta.texto1.nopromo.1.loyalty"
                                  ></loyalty-literal>
                                </p>
                                <p
                                  class="newsletter-register-text registro-subheading-loyalty"
                                >
                                  <loyalty-literal
                                    loyaltykey="form.registrate.crea.cuenta.texto2.nopromo.1.loyalty"
                                  ></loyalty-literal>
                                </p>
                              </div>

                              <div class="info-text">
                                Sana nasıl hitap etmemizi istersin?
                              </div>
                              <form
                                id="SVLoginCheck:j_id_6z:cfStep1"
                                name="SVLoginCheck:j_id_6z:cfStep1"
                                method="post"
                                class="customFormIdSTEP1 customForms customFormLangTR customFormCountryCode052"
                              >
                                <div class="row">
                                  <div class="formErrors"></div>
                                  <span
                                    id="SVLoginCheck:j_id_6z:j_id_74:formPanel"
                                  >
                                    <div class="inputContent">
                                      <label
                                        class="visuallyhidden"
                                        for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:0:cfName"
                                        >Ad</label
                                      ><input
                                        id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:0:cfName"
                                        name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:0:cfName"
                                        type="text"
                                        value=""
                                      />

                                      <div
                                        id="STEP1_cfNameErrorLabel"
                                        class="errorValidation"
                                        aria-live="assertive"
                                        role="alert"
                                      ></div>
                                    </div>
                                    <div class="inputContent">
                                      <label
                                        class="visuallyhidden"
                                        for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:1:cfSname"
                                        >Soyadı</label
                                      ><input
                                        id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:1:cfSname"
                                        name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:1:cfSname"
                                        type="text"
                                        value=""
                                        maxlength="200"
                                      />

                                      <div
                                        id="STEP1_cfSnameErrorLabel"
                                        class="errorValidation"
                                        aria-live="assertive"
                                        role="alert"
                                      ></div>
                                    </div>
                                    <div class="info-text">
                                      Hesabına istediğin yerde ve zamanda
                                      ulaşabilmen için e-posta adresi ve şifre
                                      gir.
                                    </div>
                                    <div class="inputContent">
                                      <label
                                        class="visuallyhidden"
                                        for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:2:cfEmail"
                                        >E-posta</label
                                      >
                                      <div
                                        class="eac-input-wrap"
                                        style="
                                          display: inline-block;
                                          position: relative;
                                          font-size: 13px;
                                        "
                                      >
                                        <input
                                          id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:2:cfEmail"
                                          name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:2:cfEmail"
                                          placeholder="E-posta*"
                                          type="email"
                                        /><span
                                          class="eac-sugg"
                                          style="
                                            display: block;
                                            box-sizing: content-box;
                                            line-height: normal;
                                            padding-top: 10.25px;
                                            padding-bottom: 10.25px;
                                            font-family: mango-light, arial,
                                              helvetica, verdana, sans-serif;
                                            font-weight: 400;
                                            letter-spacing: 0.3px;
                                            position: absolute;
                                            top: 0px;
                                            left: 0px;
                                          "
                                        ></span
                                        ><span
                                          class="eac-cval"
                                          style="
                                            visibility: hidden;
                                            position: absolute;
                                            display: inline-block;
                                            font-family: mango-light, arial,
                                              helvetica, verdana, sans-serif;
                                            font-weight: 400;
                                            letter-spacing: 0.3px;
                                          "
                                        ></span>
                                      </div>

                                      <div
                                        id="STEP1_cfEmailErrorLabel"
                                        class="errorValidation"
                                        aria-live="assertive"
                                        role="alert"
                                      ></div>
                                    </div>
                                    <div class="inputContent">
                                      <div
                                        class="showPassword"
                                        autocomplete="false"
                                      ></div>
                                      <label
                                        class="visuallyhidden"
                                        for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:3:cfPassw"
                                        >Parola</label
                                      ><input
                                        type="password"
                                        id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:3:cfPassw"
                                      />

                                      <div
                                        id="STEP1_cfPasswErrorLabel"
                                        class="errorValidation"
                                        aria-live="assertive"
                                        role="alert"
                                      ></div>

                                      <div
                                        id="STEP1_cfPasswSuggestLabel"
                                        class="suggestValidation"
                                      >
                                        <span
                                          >En az 1 harf ve 1 sayı içeren 7-30
                                          karakter</span
                                        >
                                      </div>
                                    </div>
                                    <div class="info-text">
                                      Siparişlerinizi takip etmek için cep
                                      telefon numaranızı ekleyin
                                    </div>

                                    <div class="customSelectContent">
                                      <div class="inlineContent phoneComponent">
                                        <div class="selectContent">
                                          <div class="icon">
                                            <div>
                                              <img
                                                class="icon-flag"
                                                src="//st.mngbcn.com/static/images/loyalty/images/flags/TR.png"
                                              />
                                            </div>
                                          </div>
                                          <select
                                            id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfPtelf"
                                            name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfPtelf"
                                            size="1"
                                            onchange="jsf.ajax.request('SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfPtelf',event,{'javax.faces.behavior.event':'change'})"
                                            class="jsfAutoUpdate selectPhonePrefix"
                                            data-component-id="STEP1_cfPtelf"
                                            tabindex="5"
                                          >
                                            <option
                                              value="+90"
                                              selected="selected"
                                              data-iso2="TR"
                                            >
                                              +90
                                            </option>
                                            <option value="+355" data-iso2="AL">
                                              Arnavutluk +355
                                            </option>
                                            <option value="+213" data-iso2="DZ">
                                              Cezayir +213
                                            </option>
                                          </select>
                                        </div>
                                        <div class="inputContent">
                                          <div>
                                            <label
                                              class="visuallyhidden"
                                              for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfTelf"
                                              >Cep telefonu</label
                                            ><input
                                              id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfTelf"
                                              name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:4:cfTelf"
                                              value=""
                                              maxlength="10"
                                              class=""
                                            />
                                          </div>

                                          <div
                                            id="STEP1_cfTelfErrorLabel"
                                            class="errorValidation"
                                            aria-live="assertive"
                                            role="alert"
                                          ></div>
                                          <div
                                            id="STEP1_cfTelfSuggestLabel"
                                            class="suggestValidation"
                                          >
                                            <span>Ör: 5XXXXXXXXX</span>
                                          </div>
                                        </div>
                                        <div></div>
                                      </div>
                                    </div>
                                    <div class="info-text">
                                      Alışverişlerinin daha hızlı olabilmesi
                                      için aşağıdaki bilgileri gir.
                                    </div>
                                    <div id="paisDiv" class="selectContent">
                                      <label
                                        class="visuallyhidden"
                                        for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:5:pais"
                                      >
                                        Ülke </label
                                      ><select
                                        id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:5:pais"
                                        name="SVLoginCheck:j_id_6z:j_id_74:repeatCf:5:pais"
                                        size="1"
                                        onchange="jsf.util.chain(document.getElementById('SVLoginCheck:j_id_6z:j_id_74:repeatCf:5:pais'), event,'mostrarInfoPopup();', 'jsf.ajax.request(\'SVLoginCheck:j_id_6z:j_id_74:repeatCf:5:pais\',event,{execute:\'@this \',render:\'@form \',onevent:function(data) { if (data.status == \'success\') {ocultarInfoPopup();;}},\'javax.faces.behavior.event\':\'change\'})');"
                                        data-component-id="STEP1_pais"
                                        tabindex="0"
                                      >
                                        <option value="400">ABD</option>
                                        <option value="457">
                                          ABD Virgin Adaları
                                        </option>
                                      </select>
                                    </div>
                                    <div class="info-text">
                                      Kişiselleştirilmiş bir deneyim için
                                      ilgilendiğin koleksiyonları seç.
                                    </div>
                                    <div class="radioContent">
                                      <div
                                        id="STEP1_cfGener_M"
                                        class="radiobutton"
                                      >
                                        <div class="check"></div>
                                        <span>Kadın</span>
                                      </div>
                                      <div
                                        id="STEP1_cfGener_H"
                                        class="radiobutton"
                                      >
                                        <div class="check"></div>
                                        <span>Erkek</span>
                                      </div>
                                      <table
                                        id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:6:cfGener"
                                        data-component-id="STEP1_cfGener"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <input
                                                id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:6:cfGener:0"
                                                type="radio"
                                              /><label
                                                for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:6:cfGener:0"
                                              >
                                                Kadın</label
                                              >
                                            </td>
                                            <td>
                                              <input
                                                id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:6:cfGener:1"
                                                type="radio"
                                              /><label
                                                for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:6:cfGener:1"
                                              >
                                                Erkek</label
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>

                                      <div
                                        id="STEP1_cfGenerErrorLabel"
                                        class="errorValidation"
                                        aria-live="assertive"
                                        role="alert"
                                      ></div>
                                    </div>
                                    <div class="info-text">
                                      Newsletter'a üye olmayı kabul ederseniz,
                                      promosyonlar ve Mango'daki en son
                                      yeniliklerden haberdar olacaksınız:
                                    </div>
                                    <div class="checkboxContent">
                                      <div class="row">
                                        <div class="labelCheckbox">
                                          <input
                                            id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:7:STEP1_cfPubli"
                                            type="checkbox"
                                          /><label
                                            for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:7:STEP1_cfPubli"
                                            >Mango'dan reklam ve kampanya
                                            içerikli iletiler ve haberler almayi
                                            kabul ediyorum.</label
                                          >
                                        </div>
                                      </div>
                                    </div>
                                    <div class="checkboxContent">
                                      <div class="row">
                                        <div
                                          id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:8:privacy_policy"
                                          class="labelCheckbox jsfAutoUpdatePassword"
                                        >
                                          <input
                                            id="SVLoginCheck:j_id_6z:j_id_74:repeatCf:8:cfPriv"
                                            type="checkbox"
                                          /><label
                                            class="jsfAutoUpdatePassword"
                                            for="SVLoginCheck:j_id_6z:j_id_74:repeatCf:8:cfPriv"
                                          >
                                            <a
                                              target="_blank"
                                              href="https://www.mango.com/gizlilik-politikasi"
                                              >Kvkk aydinlatma metni</a
                                            >
                                            ve
                                            <a
                                              target="_blank"
                                              href="https://st.mngbcn.com/help/tr/%C3%9Cyelik-S%C3%B6zle%C5%9Fmesi.pdf"
                                              >Mango üye sözleşmesini</a
                                            >
                                            kabul ediyorum.
                                          </label>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div
                                          id="STEP1_cfPrivErrorLabel"
                                          class="errorValidation"
                                          role="alert"
                                        ></div>
                                      </div>
                                    </div>
                                    <span
                                      id="SVLoginCheck:j_id_6z:j_id_74:initEventsPanelGroup"
                                      class="jsfAutoUpdateTax"
                                    >
                                    </span
                                  ></span>
                                  <div class="submitContent">
                                    <input id="SVLoginCheck:j_id_6z:j_id_m0" />
                                  </div>
                                </div>
                                <input type="hidden" /><input type="hidden" />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.menuTabs .tabs .tab {
  width: 45.4545454545%;
  float: left;
  margin-left: 2.2727272727%;
  margin-right: 2.2727272727%;
  cursor: pointer;
  min-height: 1px;
  position: relative;
  text-align: center;
}
.menuTabs .tabs .tab .active {
  border-bottom: 1px solid #000;
}
.menuTabs .tabs .tab .tab-title {
  padding-top: 4px;
  padding-bottom: 6px;
  color: #121314;
  font-family: mango-light, arial, helvetica, verdana, sans-serif;
  font-size: 14px;
}
.menuTabs .tabs {
  max-width: 100%;
  margin-top: 99px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  width: 100%;
  max-width: 400px;
}
.menuTabs {
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
}
.menuTabs .tabs .tab .active {
  border-bottom: 1px solid #000;
}
.menuTabs .tabs .tab .tab-title {
  padding-top: 4px;
  padding-bottom: 6px;
  color: #121314;
  font-family: mango-light, arial, helvetica, verdana, sans-serif;
  font-size: 14px;
}
form {

  padding: 0px!important;
}
</style>
