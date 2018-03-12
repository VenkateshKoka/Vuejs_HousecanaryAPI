<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
        <blockquote>
          &#8220;With great team and working environment,<br> even if I want to be a bad programmer,<br> I cannot be a bad programmer.&#8221;
          <footer>
            <small>
              <em>&mdash;{{employee}}</em>
            </small>
          </footer>
        </blockquote>
            
                <button id="btn" class="myButton" v-on:click="getHousing">Property Details</button>
    <v-container v-if="property_details == null">
      <h2> Loading the data from Housecanary api</h2>
    </v-container>
    <v-container v-else>
    <v-layout row wrap>
      <v-flex xs 8>
         <v-flex xs12>
        <v-table class="center" v-if="property_details !== null">
      <v-thead><h3>Property Details</h3></v-thead>
      <tr>
        <td><span>Type : </span></td><td>{{ property_details['property_type']}}</td>
      </tr>
      <tr>
        <td><span>Building Area(sq.ft) : </span></td><td>{{ property_details['building_area_sq_ft']}}</td>
      </tr>
      <tr>
        <td><span>Quality Score : </span></td><td>{{ property_details['building_quality_score']}}</td>
      </tr>
      <tr>
        <td><span>Year Built : </span></td><td>{{ property_details['year_built']}}</td>
      </tr>
      <tr>
        <td><span>No. of Baths : </span></td><td>{{ property_details['total_bath_count']}}</td>
      </tr>
      <tr>
        <td><span>No. of Bedrooms : </span></td><td>{{ property_details['number_of_bedrooms']}}</td>
      </tr>
      <tr>
        <td><span>Heating Type : </span></td><td>{{ property_details['heating']}}</td>
      </tr>
      <tr>
        <td><span>Air Conditioning : </span></td>
        <td v-if="property_details['air_conditioning'] !== null">Available</td>
        <td v-else>Not available</td>
      </tr>
       <tr>
        <td><span>Garage Parking : </span></td>
        <td v-if="property_details['garage_type_parking'] !== null">Available</td>
        <td v-else>Not available</td>
      </tr>
      <tr>
        <td><span>Fire Place : </span></td>
        <td v-if="property_details['fireplace'] !== false">Available</td>
        <td v-else>Not available</td>
      </tr>
      <tr>
        <td><span>Water Pool : </span></td>
        <td v-if="property_details['pool'] !== null">Available</td>
        <td v-else>Not available</td>
      </tr>
      <tr>
        <td><span>Car parking space : </span></td><td>{{ property_details['garage_parking_of_cars']}}  cars</td>
      </tr>
      <tr>
        <td><span>Zoning : </span></td><td>{{ property_details['zoning']}}</td>
      </tr>
    </v-table>
      </v-flex>
      </v-flex>
      <v-flex xs 4>
         <v-flex xs12>
        <v-table class="center" v-if="address_details !== null">
      <v-thead><h3>Property Address</h3></v-thead>
      <tr>
        <td><span>Address : </span></td><td>{{ address_details['address']}}</td>
      </tr>
      <tr>
        <td>City : </td><td>{{ address_details['city'] }}</td>
      </tr>
      <tr>
        <td>State : </td><td>{{ address_details['state'] }}
        &nbsp;&nbsp;&nbsp;
        zipcode :{{ address_details['zipcode']}}</td>
      </tr> 
    </v-table>
      </v-flex>
      <v-flex xs12 class="assess">
        <v-table class="center" v-if="assessment_details !== null">
      <v-thead><h3>Property Assessment</h3></v-thead>
      <tr>
        <td><span> Assessed Value : </span></td><td>{{ assessment_details['total_assessed_value']}}</td>
      </tr>
      <tr>
        <td><span> Assessed Year : </span></td><td>{{ assessment_details['assessment_year']}}</td>
      </tr>
      <tr>
        <td><span> APN : </span></td><td>{{ assessment_details['apn']}}</td>
      </tr>
      <tr>
        <td><span> Tax Amount : </span></td><td>{{ assessment_details['tax_amount']}}</td>
      </tr>
      <tr>
        <td><span> Tax Year : </span></td><td>{{ assessment_details['tax_year']}}</td>
      </tr>
    </v-table>
      </v-flex>
      </v-flex>
    </v-layout>
      </v-container> 
      </v-layout>
    </v-slide-y-transition>
  </v-container>
  
</template>
<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  // components:'VueTabs,VTab',
  data () {
    return {
      employee: 'Venkatesh koka',
      url: 'https://api.housecanary.com/v2/property/details',
      property_details: null,
      address_details: null,
      assessment_details: null,
      myname: 'koka'
    }
  },
  methods: {
    getHousing () {
      axios.get('https://cors-anywhere.herokuapp.com/' + this.url, {
        auth: {
          username: 'JR59KN5RAUBL8J1PQWM9',
          password: 'iXQeq8myjh0RC4xt5UQ2NJ9YUlnB7DSi'
        },
        params: {
          address: '43 Valmonte Plaza',
          zipcode: '90274'
        }
      })
        .then(response => {
          const k1 = response.data[0]['property/details']['result']
          const k2 = response.data[0]['address_info']
          this.property_details = k1['property']
          this.address_details = k2
          this.assessment_details = k1['assessment']
          this.myname = 'venkatesh koka'
          console.log(k1)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myButton {
	-moz-box-shadow:inset 0px 10px 47px -3px #276873;
	-webkit-box-shadow:inset 0px 10px 47px -3px #276873;
	box-shadow:inset 0px 10px 47px -3px #276873;
	background:-moz-linear-gradient(top, #599bb3 5%, #408c99 100%);
	background:-webkit-linear-gradient(top, #599bb3 5%, #408c99 100%);
	background:-o-linear-gradient(top, #599bb3 5%, #408c99 100%);
	background:-ms-linear-gradient(top, #599bb3 5%, #408c99 100%);
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#599bb3', endColorstr='#408c99',GradientType=0);
	background-color:#599bb3;
	-moz-border-radius:40px;
	-webkit-border-radius:40px;
	border-radius:40px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:17px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
.myButton:hover {
	background:-moz-linear-gradient(top, #408c99 5%, #599bb3 100%);
	background:-webkit-linear-gradient(top, #408c99 5%, #599bb3 100%);
	background:-o-linear-gradient(top, #408c99 5%, #599bb3 100%);
	background:-ms-linear-gradient(top, #408c99 5%, #599bb3 100%);
	background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#408c99', endColorstr='#599bb3',GradientType=0);
	background-color:#408c99;
}
.myButton:active {
	position:relative;
	top:1px;
}
 table.center {
    margin-left:auto; 
    margin-right:auto;
    text-align: center;
  }
.assess {
  padding-top: 30px;
}
</style>
