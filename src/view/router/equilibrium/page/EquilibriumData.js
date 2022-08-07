import Section3_Image1 from '../../../assets/images/equilibrium/Equilibrium_Section3_Image1.png'
import Section3_Image2 from '../../../assets/images/equilibrium/Equilibrium_Section3_Image2.png'
export const EquilibriumData = [
    {
        data: '4,500',
        unit: 'TPS',
        description: '*Transaction per Second'
    },
    {
        data: '13,500',
        unit: 'TPB',
        description: '*Transaction per Block'
    },
    {
        data: '1~3',
        unit: 'sec',
        description: '*Block Confirmation Time'
    }
]

export const StrengthOfEQData = [
    {
        image: Section3_Image1,
        title: '(Consensus Algorithm) Equalize',
        subTitle: 'Equilibrium engine employs Equalize, a proprietary non-competitive consensus method developed based on PBFT*, to resolve speed problems of PoW, a competitive consensus of previous generation blockchains.',
        description: '** PBFT (Practical Byzantine Fault Tolerance)\n' +
            'Consensus method adopted to reach consensus even\n' +
            'during network failures (including hacking). Used in\n' +
            'networks like Cosmos, EOS, Klaytn and R3 Corda.'
    },
    {
        image: Section3_Image2,
        title: 'Micro Chain Architecture',
        subTitle: 'Equilibrium engine employs MSA* to design each service domain as a ‘Micro Chain’, isolating failures and verloads between Micro Chains, and ultimately improving scalability of the entire network.',
        description: '*MSA (Micro Service Architecture)\n' +
            'Architectural structure in which Micro Services are built\n' +
            'like independent Lego blocks that are assembled together\n' +
            'to form a network. An opposite to Monolithic Architecture.'
    }
]