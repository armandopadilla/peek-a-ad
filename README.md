# peek-a-ad

Poor mans PokeStop Advertising Platform

#Overview
Leaving the discussion I felt like I could crank this out.  Figured it out in my drive back home and gave myself time to "spike" a solution for about 2 hours.  What you see here an advertising platform for a pokestop-like technology.  
These are only the APIs.

#Seed Data
Seed data will come from Google Places and is a Todo item.  Its simply a one off script that will run once for this prototype.

#Todo
1. Security - Needs Security love. For now everything will go over https. (Yes only gave myself 2-3 hours to crank this out so its mostly a time issue)
2. AWS set up - I want to see this running somewhere.  Will purchase a domain, set up Route53, and a ec2 instance running pm2.
3. React App Skin.
4. Unit Tests.

#Installing
1. npm install
2. sails lift

# External APIs
1. Google Places

# Tech
1. SailsJS
1. AWS
1. MongoDB - Will replace with RethinkDB over the weekend.
1. Redis

# Endpoints

## Markers
1. 'get /v1/markers' - Fetch all the markers - example /v1/markers?miles=1&clat=&clng=
2. 'get /v1/marker/:id' - Fetch specific marker - example /v1/marker/ID_HERE
3. 'post /v1/marker' - Create a new Marker.

## User
1. 'get /v1/user/:id' - Fetch Specific User
2. 'post /v1/user' - Create a new User

## Advertiser
1. 'get /v1/advertisers' - List all Advertisers in system
2. 'post /v1/advertiser' - Create a new Advertiser
3. 'get /v1/advertiser/:id' - Fetch a specific Advertiser

## Award
1. 'post /v1/award' - Award points to the user
2. 'post /v1/award/new' - Create a new Award for a specific marker
3. 'post /v1/award/create-code' - Create a new code - used by the advertisers.


# Some notes.
1. By default the app will request markers up to 1 radius so the app doesnt have to ping the backend so often.  this will reduce load a bit. Caching, will place the main data into DB but will place most popular into redis cluster.

# Plan to award points.
## Iteration v1 
1.  user goes to participating Starbucks
2.  User purchases a medium iced latte per the advertising.
3.  Starbuck DOES-X .
4.  Starbucks hands the user a 8 digit code that has been created for this transaction.
5.  The code is only valid for 2 minutes.

## What I thought about while driving home.
1.  Scan a bar code?  How should Starbucks update their systems to talk to our systems?
2.  Allow the user to simply swipe it?  Nope, can’t verify that they bought anything.
3.  Simplest solutions (i think) is to have Starbucks make a backend call to us.  We then give them a code.  They then hand that code to the customer.   The backend call must only be created during a valid purchase (I’m sure they have ways to do this on the starbucks side)


# Model
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


