<template>
  <div class="main">
    <div class="pannel">
      <div class="title">
        Default User:
      </div>
      <div class="form">
        <label>
          Default User: {{ canApplyUser }}
          <select 
            v-model="activeDefaultUser"
          >
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </label>
      </div>
      <div class="control-panel">
        <button @click="revertUser">
          Revert
        </button>
        <button class="apply" @click="applyUser" :disabled="canApplyUser">
          Apply
        </button>
      </div>
    </div>
    <div class="pannel" v-if="activeUserDetails">
      <div class="title">
        Default User settings:
      </div>
      <div class="form">
        <label>
          Display name:
          <input 
            v-model="activeUserDetails.display_name"
          />
        </label>
        <label>
          Organization:
          <input 
            disabled
            v-model="activeUserDetails.organization"
          />
        </label>
        <label>
          Role:
          <select 
            v-model="activeUserDetails.role"
          >
            <option v-for="role in roles" :key="role" :value="role">
              {{ role }}
            </option>
          </select>
        </label>
      </div>
      <div class="control-panel">
        <button  :disabled="false">
          Revert
        </button>
        <button class="apply" @click="applySettings" :disabled="canApplyUserDetails">
          Apply
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      activeDefaultUser: null,
      activeUserDetails: null,
      roles: [
        'Admin',
        'Manager',
        'Superviser'
      ]
    }
  },
  mounted() {
    this.activeDefaultUser = this.users.find(user => user.isDefault).id
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    userDetails() {
      return this.$store.state.userDetails
    },
    canApplyUser() {
      const selectedUser = this.userDetails.find(details => details.id === this.activeDefaultUser);
      if (!this.activeUserDetails || this.activeDefaultUser !== this.activeUserDetails.id ) {
        return false
      }
      return JSON.stringify(this.activeUserDetails) !== JSON.stringify(selectedUser);
    },
    canApplyUserDetails() {
      if (!this.activeUserDetails) {
        return false;
      }
      const currentUserId = this.activeUserDetails.id;
      return currentUserId !== this.activeDefaultUser;
    }
  },
  methods: {
    ...mapActions(['updateUserDetails']),
    applyUser() {
      const selectedUser = this.userDetails.find(details => details.id === this.activeDefaultUser);
      this.activeUserDetails = Object.assign({}, selectedUser);
    },
    revertUser() {
      this.activeUserDetails = null
    },
    applySettings() {
      this.updateUserDetails(this.userDetails.map(user => user.id === this.activeDefaultUser ? this.activeUserDetails : user));
    }
  }
}
</script>

<style scoped>

.main {
  margin-top: 75px;
}
.pannel {
  border: 1px solid black;
  margin: 20px;
}

.pannel .title {
  text-align: left;
  padding: 10px 20px;
  border-bottom: 1px solid black;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
  padding: 40px 20px;
}

.control-panel {
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 10px 20px;
}

.control-panel button {
  border-radius: 5px;
  padding: 12px;
  border: 1px solid gray;
}

.control-panel button:not([disabled]):hover {
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.2s;
}

.control-panel button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.apply {
  background-color: blue;
  color: #fff;
}

</style>