<template>
  <v-container class="pa-4" fluid>
    <!-- 타이틀 -->
    <v-row justify="center">
      <v-col cols="12" class="mb-4">
        <v-typography class="text-h4 font-weight-bold">회원가입</v-typography>
      </v-col>
    </v-row>

    <v-form v-model="valid" @submit.prevent="submitForm">
      <!-- 학원 선택 -->
      <v-select
        v-model="selectedAcademy"
        :items="academies"
        label="학원을 선택하세요"
        :rules="[v => !!v || '학원을 선택하세요']"
        outlined
        dense
        color="primary"
        class="mb-4"
      ></v-select>

      <!-- 원생 이름 입력 -->
      <v-text-field
        v-model="studentName"
        label="원생 이름"
        :rules="[v => !!v || '원생 이름을 입력하세요']"
        outlined
        dense
        color="primary"
        class="mb-4"
      ></v-text-field>

      <!-- 핸드폰 번호 입력 -->
      <v-text-field
        v-model="phoneNumber"
        label="핸드폰 번호"
        :rules="[v => !!v || '핸드폰 번호를 입력하세요']"
        outlined
        dense
        color="primary"
        mask="####-####-####"
        placeholder="010-1234-5678"
        class="mb-4"
      ></v-text-field>

      <!-- 학부모 이름 입력 -->
      <v-text-field
        v-model="parentName"
        label="학부모 이름"
        :rules="[v => !!v || '학부모 이름을 입력하세요']"
        outlined
        dense
        color="primary"
        class="mb-4"
      ></v-text-field>

      <!-- 학부모 핸드폰 번호 입력 -->
      <v-text-field
        v-model="parentPhoneNumber"
        label="학부모 핸드폰 번호"
        :rules="[v => !!v || '학부모 핸드폰 번호를 입력하세요']"
        outlined
        dense
        color="primary"
        mask="####-####-####"
        placeholder="010-1234-5678"
        class="mb-4"
      ></v-text-field>

      <!-- 제출 버튼 -->
      <v-btn :disabled="!valid" type="submit" color="primary" class="mx-auto d-block mt-4">
        저장
      </v-btn>
    </v-form>

    <!-- 성공 메시지 -->
    <v-snackbar v-model="snackbar" color="success" timeout="3000" top right>
      회원가입이 완료되었습니다!
      <v-btn color="white" @click="snackbar = false">닫기</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      selectedAcademy: null,
      studentName: "",
      phoneNumber: "",
      parentName: "",
      parentPhoneNumber: "",
      academies: ["학원 A", "학원 B", "학원 C"], // 실제 학원 목록으로 변경하세요.
      snackbar: false,
    };
  },
  methods: {
    submitForm() {
      // 서버에 데이터 저장하는 로직을 여기서 작성합니다.
      console.log("학원:", this.selectedAcademy);
      console.log("원생 이름:", this.studentName);
      console.log("핸드폰 번호:", this.phoneNumber);
      console.log("학부모 이름:", this.parentName);
      console.log("학부모 핸드폰 번호:", this.parentPhoneNumber);

      // 성공 메시지 표시
      this.snackbar = true;

      // 입력 값 초기화
      this.selectedAcademy = null;
      this.studentName = "";
      this.phoneNumber = "";
      this.parentName = "";
      this.parentPhoneNumber = "";
    },
  },
};
</script>

<style scoped>
.v-container {
  max-width: 500px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.text-h4 {
  font-size: 28px;
  font-weight: 600;
  color: #333;
}

.mb-4 {
  margin-bottom: 16px;
}

.v-btn {
  text-transform: none;
  font-weight: 500;
  padding: 10px 24px;
}

.v-snackbar {
  font-size: 16px;
}
</style>
