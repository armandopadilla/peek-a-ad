# peek-a-ad

Poor mans PokeStop + Advert Marker Platform
a [Sails](http://sailsjs.org) application

#Overview
Leaving the discussion I felt like I could crank this out.  Figured it out in my drive back home and gave myself to "spike"
a solution for about 2 hours.  What you see here an advertising platform for pokestop-like items.  Seed data will come from
google places API.  These are only the APIs.

#Installing
npm install
sails lift

# External APIs
1. Google Places

# Tech
1. SailsJS
1. AWS
1. MongoDB
1. Redis

#Endpoints
	## GET - fetch specific marker - /marker/:id
	##GET - fetch markers within a radius /markers?radius=1&lat=X&lon=Y
		By default the app will request markers up to 1 radius so the app doesnt have to ping the backend so often.  this will reduce
		load a bit.
		Caching - Will place the main data into DB but will place most popular into redis cluster.
	##POST - create code
	##POST - award the points  - will return a 5 digit code the user must enter in
		/award/:id

	#How will this work
		1.  user goes to participating Starbucks
		2.  User purchases a medium iced latte per the advertising.
		3.  Starbuck DOES-X .
		4.  Starbucks hands the user a 8 digit code that has been created for this transaction.
		5.  The code is only valid for 2 minutes.

	#Looking at how other places have done this at the moment.
		1.  Scan a bar code?  How should Starbucks update their systems to talk to our systems?
		2.  Allow the user to simply swipe it?  Nope, can’t verify that they bought anything.
		3.  Simplest solutions (i think) is to have Starbucks make a backend call to us.  We then give them a code.  They then hand that
                code to the customer.   The backend all must only be created during a valid purchase (I’m sure they have ways to do this on the starbucks side)


#Model
	Marker
		address
		lat
		long
		awards - See Award Object.

	Award
		marker_id
		Advertiser
		weight
		description
		award_in_points:
	User
		name
		email
		points

	User_Audit_Log  (user for profiling later down the road…data science GO!)

	Award_Code
		award_id
		code
		created_date


