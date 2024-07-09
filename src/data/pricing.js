export const PricingData = [
    {
        id: '1',
        title: 'YouTubers',
        icon: "radix-icons:dot-filled",
        subCategories: [
            {
                label: '01',
                title: 'Starter Boost',
                description: 'New YouTubers or those with established channels seeking a refresh.',
                price: '$2,500 ',
                team: [{
                    id: '1',
                    name: 'Team',
                    teamQuantity: '2 Video Editors, 1 Graphic Designer. ',
                }],
                videoOutPut: [{
                    id: '1',
                    name: 'Video OutPut',
                    content: "8-10 Videos per month (10-15 minutes each)."
                }],
                services: [{
                    id: '1',
                    name: 'Services'
                },
                {
                    id: '2',
                    points: [
                        'Expert video editing (cuts, transitions, music integration).',
                        'Eye-catching thumbnail creation.',
                        'High-resolution video rendering.'
                    ]
                }],
            },
            {
                label: '02',
                title: 'Content Creator ',
                description: ' Growing YouTubers seeking to refine their content and strategy.',
                team: [{ name: 'Team', teamQuantity: '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite) ' }],
                videoOutPut: [{ name: 'Video OutPut', content: "12-15 Videos per month (10-20 minutes each)" }],
                services: [{ name: 'Services' }, { points: [' All Starter Boost Package services', 'Advanced video editing (color correction, motion graphics - limited)', 'Content brainstorming and keyword research', ' Basic script outlines (optional)'] }],
                price: '$4,500 '
            },
            {
                label: '03',
                title: 'Growth Accelerator ',
                description: ' Established YouTubers ready to take their channel to the next level. ',
                team: [{ name: 'Team', teamQuantity: '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full). ' }],
                videoOutPut: [{ name: 'Video OutPut', content: "18-22 Videos per month (10-20 minutes each)" }],
                services: [{ name: 'Services' }, { points: [' All Content Creator Package services', ' In-depth content strategy (topic research, scripting)', ' Professional video editing (extensive motion graphics)', 'SEO optimization for YouTube', ' 2 Social media post designs per video'] }],
                price: '$6,000 '
            },
        ]
    },
    {
        id: '2',
        title: 'Influencer',
        icon: 'radix-icons:dot-filled',
        subCategories: [
            {
                label: '01',
                title: 'Spark Up ',
                description: ' New short-form influencers building their audience and experimenting with content.',
                team: [{ name: 'Team', teamQuantity: '2 Video Editors' }],
                videoOutPut: [{ name: 'Video OutPut', content: "15 Videos per month (30 seconds to 45 seconds each)." }],
                services: [{ name: 'Services' }, { points: ['Expert video editing (cuts, transitions, music integration).', 'Trendy thumbnail creation (upon request).', ' High-resolution video rendering.'] }],
                price: '$1,750 '
            },
            {
                label: '02',
                title: 'Content Ignite ',
                description: ' Growing short-form influencers refining their content and audience engagement.',
                team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Content Strategist (Lite).' }],
                videoOutPut: [{ name: 'Video OutPut', content: "20 Videos per month (1 minute each)." }],
                services: [{ name: 'Services' }, { points: [' All Spark Up Package services.', '  Content brainstorming and trending topic research.', '  Basic script outlines (optional).', ' Hashtag and caption strategy suggestions.'] }],
                price: '$2,500 '
            },
            {
                label: '03',
                title: 'Viral Velocity ',
                description: 'Established short-form influencers ready to explode their reach and engagement. ',
                team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Graphic Designer, 1 Content Strategist (Full).' }],
                videoOutPut: [{ name: 'Video OutPut', content: "25-30 Videos per month (1 minute each)." }],
                services: [{ name: 'Services' }, { points: [' All Content Ignite Package services.', ' Professional video editing with motion graphics and effects.', ' In-depth content strategy (concept development, scripting).', ' Eye-catching custom thumbnail creation', ' Platform-specific optimization tips.'] }],
                price: '$4,000 ',
            },
        ]
    },
    {
        id: '3',
        title: 'Entrepreneurs',
        icon: 'radix-icons:dot-filled',
        subCategories: [
            {
                label: '01',
                title: ' Brand Launch Boost ',
                description: ' New businesses creating a strong first impression. ',
                team: [{ name: 'Team', teamQuantity: '2 Video Editors, 1 Graphic Designer. ' }],
                videoOutPut: [{ name: 'Video OutPut', content: "10-15 videos both long and short." }],
                services: [{ name: 'Videos Included' }, { points: ['  Product Explainer Videos.', ' Social Media Teasers.', ' Customer Testimonial Video (additional fee).'] }],
                price: '$3,500 '
            },
            {
                label: '02',
                title: 'Expertise & Trust Builder ',
                description: 'Established businesses positioning themselves as industry leaders. ',
                team: [{ name: 'Team', teamQuantity: '3 Video Editors, 1 Graphic Designer, 1 Content Strategist (Lite) ' }],
                videoOutPut: [{ name: 'Video OutPut', content: "8-10 Videos per month (10-15 minutes each)" }],
                services: [{ name: 'Services' }, { points: [' Educational Tutorials.', ' Customer Testimonial Videos.', ' Social Media Promo Videos.'] }],
                price: '$4,500'
            },
            {
                label: '03',
                title: 'Lead Generation Machine ',
                description: ' Businesses seeking to capture qualified leads and generate sales.',
                team: [{ name: 'Team', teamQuantity: '3 Video Editors, 2 Graphic Designers, 1 Content Strategist (Full)' }],
                videoOutPut: [{ name: 'Video OutPut', content: "20-25 videos both long and short." }],
                services: [{ name: 'Services' }, { points: [' Compelling Video Ads.', ' Landing Page Videos.', ' Product Demonstration Video (additional fee).'] }],
                price: '$5,500 ',
            },
        ]
    },
    {
        id: '4',
        title: ' Build Custom Team',
        icon: 'radix-icons:dot-filled',
    },
]  