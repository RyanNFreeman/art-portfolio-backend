exports.seed = function(knex) {
  return knex("posts").insert([
    {
      id: 1,
      user_id: 1,
      picture: "https://i.imgur.com/vLHJ5VC.jpg",
      description: "My description 1",
      upvotes: 10
    },
    {
      id: 2,
      user_id: 1,
      picture: "https://i.imgur.com/XQXIlzg.png",
      description: "My description 2",
      upvotes: 4
    },
    {
      id: 3,
      user_id: 1,
      picture: "https://i.imgur.com/WHDVvDe.jpg",
      description: "My description 3",
      upvotes: 7
    },
    {
      id: 4,
      user_id: 1,
      picture: "https://i.imgur.com/kXqVLbD.png?1",
      description: "My description 4",
      upvotes: 9
    },
    {
      id: 5,
      user_id: 1,
      picture: "https://i.imgur.com/lqGiLye.png",
      description: "My description 5",
      upvotes: 100
    },
    {
      id: 6,
      user_id: 1,
      picture: "https://i.imgur.com/EpJ8o3O.jpg",
      description: "My description 6",
      upvotes: 22
    },
    {
      id: 7,
      user_id: 1,
      picture: "https://i.imgur.com/bfN27bv.jpg",
      description: "My description 7",
      upvotes: 1
    }
  ]);
};