import { Linksmodel, Projectmodel, deservemodel, helpModel, latestModel } from "./model";
import vision from "../assets/images/vision.png"
import mision from "../assets/images/mission.png"
import goal from "../assets/images/goal.png"

import projOne from "../assets/images/proj1.png"
import projTwo from "../assets/images/proj2.png"
import projThree from "../assets/images/proj3.png"

import merch from "../assets/svgs/merch.svg"
import trans from "../assets/svgs/trans.svg"
import news from "../assets/svgs/news.svg"
import calendar from "../assets/svgs/calendar.svg"
import nots from "../assets/svgs/notifications.svg"

import projP from "../assets/images/projpart.png"
import projF from "../assets/images/projfull.png"

import issueOne from "../assets/images/issue1.png"
import issueTwo from "../assets/images/issue2.png"
import issueThree from "../assets/images/issue3.png"

import helpOne from "../assets/images/help1.png"
import helpTwo from "../assets/images/help2.png"
import helpThree from "../assets/images/help3.png"

import helpsOne from "../assets/svgs/help1.svg"
import helpsTwo from "../assets/svgs/help2.svg"
import helpsThree from "../assets/svgs/help3.svg"

export const Links:Linksmodel[] =[
    {
        name:'Home',
        link:'/'
    },
    {
        name:'About',
        link:'/aboutus'
    },
    {
        name:'Media',
        link:'/blog',
        dropdown:true
    },
    {
        name:'Partnership',
        link:'/partnership'
    },
    {
        name:'Project',
        link:'/projects'
    }
]

export const Deserves:deservemodel[] =[
    {
        image:vision,
        title:"Our Vision",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Massa turpis sem urna vitae enim leo diam et. Aliquam facilisis commodo viverra ',
    },
    {
        image:mision,
        title:"Our Mission",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Massa turpis sem urna vitae enim leo diam et. Aliquam facilisis commodo viverra ',
    },
    {
        image:goal,
        title:"Our Goal",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Massa turpis sem urna vitae enim leo diam et. Aliquam facilisis commodo viverra ',
    }
]

export const projects:Projectmodel[] =[
    {
        image:projOne,
        title:"Lorem ipsum dolor sit amet consec. Massa turpis sem ",
        type:'Laptop Schorlaship'
    },
    {
        image:projTwo,
        title:"Lorem ipsum dolor sit amet consec. Massa turpis sem ",
        type:'Laptop Schorlaship'
    },
    {
        image:projThree,
        title:"Lorem ipsum dolor sit amet consec. Massa turpis sem ",
        type:'Laptop Schorlaship'
    }
    
]

export const gains:deservemodel[] =[
    {
        image:merch,
        title:"Free merch",
        subtitle:'As a SoftLife partner, you’re entitled to get free merchandise '
    },
    {
        image:trans,
        title:"Transparency in transactions",
        subtitle:'As a SoftLife partner, you’re entitled to get free merchandise '
    },
    {
        image:news,
        title:"Weekly newsletters",
        subtitle:'As a SoftLife partner, you’re entitled to get free merchandise '
    },
    {
        image:calendar,
        title:"Be the first to know about any upcoming event",
        subtitle:'As a SoftLife partner, you’re entitled to get free merchandise '
    },
    {
        image:nots,
        title:"Get to know about future projects",
        subtitle:'As a SoftLife partner, you’re entitled to get free merchandise '
    }
]

export const partner:deservemodel[] =[
    {
        image:projP,
        title:"Project Partnership",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit'
    },
    {
        image:projF,
        title:"Full time partnership",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit '
    }
]

export const footLinks = [
    {
        name:'Company',
        links:['About Us','Contact Us','Become a partner', 'Donate', 'Programs']
    },
    {
        name:'Legal',
        links:['Terms','Privacy','Security']
    },
    {
        name:'Resources',
        links:['Blogs','Podcast','FAQ']
    }
]

export const blogs:latestModel[] =[
    {
        image:issueOne,
        title:"Getting started as a SoftLifer",
        type:'Lifestyle',
        date:'Jan 14th, 2023',
        time:'3 mins read'
    },
    {
        image:issueTwo,
        title:"Getting started as a SoftLifer",
        type:'Technology',
        date:'Jan 14th, 2023',
        time:'3 mins read'
    },
    {
        image:issueThree,
        title:"Getting started as a SoftLifer",
        type:'Lifestyle',
        date:'Jan 14th, 2023',
        time:'3 mins read'
    },
    
]

export const help:helpModel[] =[
    {
        image:helpOne,
        title:"We organize training programs",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit scelerisque dictum dolor. Etiam rutrum vitae lorem lectus. Ullamcorper quisque mauris justo suspendisse praesent egestas. Lectus imperdiet  ',
        svg:helpsOne
    },
    {
        image:helpTwo,
        title:"We organize training programs",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit scelerisque dictum dolor. Etiam rutrum vitae lorem lectus. Ullamcorper quisque mauris justo suspendisse praesent egestas. Lectus imperdiet  ',
        svg:helpsTwo
    },
    {
        image:helpThree,
        title:"We organize training programs",
        subtitle:'Lorem ipsum dolor sit amet consectetur. Lectus pulvinar sed eget maecenas cras vel semper rhoncus. Fames massa nulla molestie suspendisse commodo tristique. Ultrices turpis commodo nulla iaculis elit scelerisque dictum dolor. Etiam rutrum vitae lorem lectus. Ullamcorper quisque mauris justo suspendisse praesent egestas. Lectus imperdiet  ',
        svg:helpsThree
    }
    
]
export const teams = [
    {
        name:'John Doe',
        label:'CEO and Founder'
    },
    {
        name:'John Doe',
        label:'CEO and Founder'
    },
    {
        name:'John Doe',
        label:'CEO and Founder'
    }
]