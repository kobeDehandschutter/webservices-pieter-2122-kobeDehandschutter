const service = require('../service/film');
const repo = require('../repository/film');
const each = require('jest-each').default;

describe('getAllFilms', () => {
  it('Shoud return a list of films', async () => {
    service.debugLog = jest.fn();
    repo.findAll = jest.fn().mockResolvedValue({
      id: 4,
      title: 'Thor',
      filmsorserie: 'film',
      releasedate: '2011-05-06',
      photo: 'Thor1',
      summary:
        'Thor is the son of Odin (king of Asgard) and an arrogant God. Loki is this brother. For rupturing the truce between Asgard and Jotunheim, Odin exiles Thor to Earth after stripping him off all the Godly powers. Thor’s hammer, the source of his power, is enchanted such that only the worthy can wield it. Thor gets separated from his hammer. While the hammer is found by S.H.I.E.L.D, Thor is found by Dr. Jane Foster and Dr. Erik Selvig. Thor manages to get to the hammer but is unable to lift it because he’s not worthy. Back in Asgard, Loki finds out that he’s adopted. While Odin enters his deep slumber, Loki takes over the throne. Thor’s friends don’t like this and convince the gatekeeper of the Bifröst (rainbow bridge transportation thingy), Heimdall, to send them to Earth. Loki gets to know of this and sends the Destroyer (an indestructible metallic being thingy) to Earth to kill Thor. The Destroyer defeats Thor’s friends, but he offers himself as a sacrifice and is struck. Because of his worthy actions, Thor’s hammer returns to him. Thor destroys the Destroyer and heads back to Asgard to confront Loki. The two of them fight, and Thor blows up the Bifröst bridge so that no one can enter Asgard and invade it. Odin awakens and stops Thor and Loki from falling into the emptiness under the bridge. Loki commits suicide by letting himself fall off (no he doesn’t die, he returns in The Avengers). Thor and Odin reconcile, but Thor is stuck on Asgard. Back on Earth, Jane is looking for a way to get to Thor.',
    });

    const result = await service.getAll(100, 0);
    expect(result.data).toEqual({
      id: 4,
      title: 'Thor',
      filmsorserie: 'film',
      releasedate: '2011-05-06',
      photo: 'Thor1',
      summary:
        'Thor is the son of Odin (king of Asgard) and an arrogant God. Loki is this brother. For rupturing the truce between Asgard and Jotunheim, Odin exiles Thor to Earth after stripping him off all the Godly powers. Thor’s hammer, the source of his power, is enchanted such that only the worthy can wield it. Thor gets separated from his hammer. While the hammer is found by S.H.I.E.L.D, Thor is found by Dr. Jane Foster and Dr. Erik Selvig. Thor manages to get to the hammer but is unable to lift it because he’s not worthy. Back in Asgard, Loki finds out that he’s adopted. While Odin enters his deep slumber, Loki takes over the throne. Thor’s friends don’t like this and convince the gatekeeper of the Bifröst (rainbow bridge transportation thingy), Heimdall, to send them to Earth. Loki gets to know of this and sends the Destroyer (an indestructible metallic being thingy) to Earth to kill Thor. The Destroyer defeats Thor’s friends, but he offers himself as a sacrifice and is struck. Because of his worthy actions, Thor’s hammer returns to him. Thor destroys the Destroyer and heads back to Asgard to confront Loki. The two of them fight, and Thor blows up the Bifröst bridge so that no one can enter Asgard and invade it. Odin awakens and stops Thor and Loki from falling into the emptiness under the bridge. Loki commits suicide by letting himself fall off (no he doesn’t die, he returns in The Avengers). Thor and Odin reconcile, but Thor is stuck on Asgard. Back on Earth, Jane is looking for a way to get to Thor.',
    });
  });

  it('Shoud return a list of films', async () => {
    repo.addFilm = jest.fn();
    service.debugLog = jest.fn();
    repo.findAll = jest.fn().mockResolvedValue({
      id: 4,
      title: 'Thor',
      filmsorserie: 'film',
      releasedate: '2011-05-06',
      photo: 'Thor1',
      summary:
        'Thor is the son of Odin (king of Asgard) and an arrogant God. Loki is this brother. For rupturing the truce between Asgard and Jotunheim, Odin exiles Thor to Earth after stripping him off all the Godly powers. Thor’s hammer, the source of his power, is enchanted such that only the worthy can wield it. Thor gets separated from his hammer. While the hammer is found by S.H.I.E.L.D, Thor is found by Dr. Jane Foster and Dr. Erik Selvig. Thor manages to get to the hammer but is unable to lift it because he’s not worthy. Back in Asgard, Loki finds out that he’s adopted. While Odin enters his deep slumber, Loki takes over the throne. Thor’s friends don’t like this and convince the gatekeeper of the Bifröst (rainbow bridge transportation thingy), Heimdall, to send them to Earth. Loki gets to know of this and sends the Destroyer (an indestructible metallic being thingy) to Earth to kill Thor. The Destroyer defeats Thor’s friends, but he offers himself as a sacrifice and is struck. Because of his worthy actions, Thor’s hammer returns to him. Thor destroys the Destroyer and heads back to Asgard to confront Loki. The two of them fight, and Thor blows up the Bifröst bridge so that no one can enter Asgard and invade it. Odin awakens and stops Thor and Loki from falling into the emptiness under the bridge. Loki commits suicide by letting himself fall off (no he doesn’t die, he returns in The Avengers). Thor and Odin reconcile, but Thor is stuck on Asgard. Back on Earth, Jane is looking for a way to get to Thor.',
    });

    const result = await service.getAll(100, 0);
    expect(result.data).toEqual({
      id: 4,
      title: 'Thor',
      filmsorserie: 'film',
      releasedate: '2011-05-06',
      photo: 'Thor1',
      summary:
        'Thor is the son of Odin (king of Asgard) and an arrogant God. Loki is this brother. For rupturing the truce between Asgard and Jotunheim, Odin exiles Thor to Earth after stripping him off all the Godly powers. Thor’s hammer, the source of his power, is enchanted such that only the worthy can wield it. Thor gets separated from his hammer. While the hammer is found by S.H.I.E.L.D, Thor is found by Dr. Jane Foster and Dr. Erik Selvig. Thor manages to get to the hammer but is unable to lift it because he’s not worthy. Back in Asgard, Loki finds out that he’s adopted. While Odin enters his deep slumber, Loki takes over the throne. Thor’s friends don’t like this and convince the gatekeeper of the Bifröst (rainbow bridge transportation thingy), Heimdall, to send them to Earth. Loki gets to know of this and sends the Destroyer (an indestructible metallic being thingy) to Earth to kill Thor. The Destroyer defeats Thor’s friends, but he offers himself as a sacrifice and is struck. Because of his worthy actions, Thor’s hammer returns to him. Thor destroys the Destroyer and heads back to Asgard to confront Loki. The two of them fight, and Thor blows up the Bifröst bridge so that no one can enter Asgard and invade it. Odin awakens and stops Thor and Loki from falling into the emptiness under the bridge. Loki commits suicide by letting himself fall off (no he doesn’t die, he returns in The Avengers). Thor and Odin reconcile, but Thor is stuck on Asgard. Back on Earth, Jane is looking for a way to get to Thor.',
    });
  });

  it('log something', () => {
    //logger = 'waarde';
    //logger.debug = jest
    console.log = jest.fn();
    const result = service.debugLog('test');
    expect(service.debugLog).toHaveBeenCalled();
  });
});
