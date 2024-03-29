// src/config/config.ts
const whitelistData = {
  projectName: "Solana Galaxy",
  description: "Regsiter for $COPS Airdrop & NFT",
  bannerUrl: "/solanaGradient.jpg",
  profilePictureUrl: "/bankk.png",

  websiteUrl: "https://Solanacops.xyz",
  twitterUrl: "https://twitter.com/solanagalaxycop",
  discordUrl: "https://discord.gg/hP8RbPGwpg",

  registrationLimit: 20000,
  registrationStartDate: "2024-03-27T12:00:00Z",
  registrationEndDate: "2024-04-10T12:00:00Z",
  minimumWalletBalance: 0.001,

  mintPrice: 0.000,
  totalSupply: 5555,
  numberOfWinners: 5555,

  
  verifyDiscordRole: {
    id: "1210984429909057547",
    name: "Verified",
  },
  verifyDiscordMembership: {
    id: "1203251142172217354",
    name: "SolanaGalazy Server",
  },

  requireTwitter: true,
  requireDiscord: false,
};

export default whitelistData;
