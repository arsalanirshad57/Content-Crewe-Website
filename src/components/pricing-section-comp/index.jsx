import React from 'react'
import H5 from '../../components/typography/h5'
import H2 from '../../components/typography/h2'
import DesktopPricingSection from './desktop-pricing-section'
import MobilePricingSection from './mobile-pricing-section'

const PricingSectionComp = () => {
    const PricingData = [
        {
            title: 'YouTubers',
            icon: "mingcute:youtube-line",
            subCategories: [
                {
                    label: '01',
                    title: 'Starter Boost',
                    description: ' New YouTubers or those with established channels seeking a refresh. ',
                    team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Graphic Designer ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "8-10 Videos per month (10-15 minutes each)" }],
                    services: [{ name: 'Services' }, { points: ['Expert video editing (cuts, transitions, music integration)', 'Eye-catching thumbnail creation', 'High-resolution video rendering'] }],
                    price: '$2,500/Month'
                },
                {
                    label: '02',
                    title: 'Content Creator ',
                    description: ' Growing YouTubers seeking to refine their content and strategy.',
                    team: [{ name: 'Team', teamQuantity: '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite) ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "12-15 Videos per month (10-20 minutes each)" }],
                    services: [{ name: 'Services' }, { points: [' All Bronze Package services', 'Advanced video editing (color correction, motion graphics - limited)', 'Content brainstorming and keyword research', ' Basic script outlines (optional)'] }],
                    price: '$4,500/Month'
                },
                {
                    label: '03',
                    title: 'Growth Accelerator ',
                    description: ' Established YouTubers ready to take their channel to the next level. ',
                    team: [{ name: 'Team', teamQuantity: '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full). ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "18-22 Videos per month (10-20 minutes each)" }],
                    services: [{ name: 'Services' }, { points: [' All Silver Package services', ' In-depth content strategy (topic research, scripting)', ' Professional video editing (extensive motion graphics)', 'SEO optimization for YouTube', 'Bonus: 2 Social media post designs per video'] }],
                    price: '$6,000/Month'
                },
            ]
        },
        {
            title: 'Short Form',
            icon: 'fa6-regular:file-video',
            subCategories: [
                {
                    label: '01',
                    title: 'Spark Up ',
                    description: ' New short-form influencers building their audience and experimenting with content.',
                    team: [{ name: 'Team', teamQuantity: '2 Video Editors' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "15 Videos per month (30 seconds to 45 seconds each)" }],
                    services: [{ name: 'Services' }, { points: ['Expert video editing (cuts, transitions, music integration)', 'Trendy thumbnail creation (upon request)', ' High-resolution video rendering'] }],
                    price: '$1,750/Month'
                },
                {
                    label: '02',
                    title: 'Content Ignite ',
                    description: ' Growing short-form influencers refining their content and audience engagement.',
                    team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Content Strategist (Lite)' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "20 Videos per month (1 minute each)" }],
                    services: [{ name: 'Services' }, { points: [' All Bronze Package services', '  Content brainstorming and trending topic research', '  Basic script outlines (optional)', ' Hashtag and caption strategy suggestions'] }],
                    price: '$2,500/Month'
                },
                {
                    label: '03',
                    title: 'Viral Velocity ',
                    description: 'Established short-form influencers ready to explode their reach and engagement ',
                    team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Graphic Designer, 1 Content Strategist (Full) ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "25-30 Videos per month (1 minute each)" }],
                    services: [{ name: 'Services' }, { points: [' All Silver Package services', ' Professional video editing with motion graphics and effects', ' In-depth content strategy (concept development, scripting)', ' Eye-catching custom thumbnail creation', ' Platform-specific optimization tips'] }],
                    price: '$4,000/Month'
                },
            ]
        },
        {
            title: 'Entrepreneurs',
            icon: 'streamline:collaborations-idea',
            subCategories: [
                {
                    label: '01',
                    title: ' Brand Launch Boost ',
                    description: ' New businesses creating a strong first impression. ',
                    team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Graphic Designer. ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "10-15 videos both long and short." }],
                    services: [{ name: 'Videos Included' }, { points: ['  Product Explainer Video', ' Social Media Teaser', ' (Optional Add-on'] }],
                    price: '$3,500/Month'
                },
                {
                    label: '02',
                    title: 'Expertise & Trust Builder ',
                    description: 'Established businesses positioning themselves as industry leaders ',
                    team: [{ name: 'Team', teamQuantity: '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite) ' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "8-10 Videos per month (10-15 minutes each)" }],
                    services: [{ name: 'Services' }, { points: [' Educational Tutorial', ' Customer Testimonial Video', ' Social Media Promo Video'] }],
                    price: '$4,500/Month'
                },
                {
                    label: '03',
                    title: 'Lead Generation Machine ',
                    description: ' Businesses seeking to capture qualified leads and generate sales.',
                    team: [{ name: 'Team', teamQuantity: '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full)' }],
                    videoOutPut: [{ name: 'Video OutPut', content: "20-25 videos both long and short." }],
                    services: [{ name: 'Services' }, { points: [' Compelling Video Ad', ' Landing Page Video', ' Optional Add-on'] }],
                    price: '$5,500/Month'
                },
            ]
        },
        {
            title: ' Build Custom Team',
            icon: 'fluent-mdl2:customize-toolbar',
        },
    ]
    return (
        <div className='flex flex-col gap-10 md:gap-16 '>
            <div className="text-center">
                <H5 className={'uppercase'}>Pricing</H5>
                <H2>How We Provide you <br /> Our Best Services</H2>
            </div>
            <div className=" hidden md:flex justify-center gap-5">
                <DesktopPricingSection PricingData={PricingData} />
            </div>
            <div className=" flex md:hidden justify-center">
                <MobilePricingSection PricingData={PricingData} />
            </div>
        </div>
    )
}

export default PricingSectionComp